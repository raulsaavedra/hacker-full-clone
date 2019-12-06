const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const fetch = require('node-fetch');
const schedule = require('node-schedule');

const CLIENT_BUILD_PATH = path.join(__dirname, '../frontend/build');

const connect = url =>
  mongoose.connect(url, {
    useNewUrlParser: true,
    connectTimeoutMS: 1000,
  });

const postSchema = new mongoose.Schema({
  title: String,
  story_title: String,
  author: String,
  created_at: Date,
  url: String,
  story_url: String,
});

const Post = mongoose.model('Post', postSchema);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(CLIENT_BUILD_PATH));

schedule.scheduleJob('* */1 * * *', async () => {
  const response = await fetch(
    'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'
  );
  const data = await response.json();
  const posts = data.hits;
  const todayHour = new Date();
  todayHour.setHours(todayHour.getHours() - 1);
  console.log(posts);
  console.log('testing update');
  posts.map(async post => {
    const postDate = new Date(post.created_at);
    console.log('post', postDate);
    console.log('todayhour', todayHour);
    if (postDate >= todayHour)
      await Post.create({
        title: post.title,
        story_title: post.story_title,
        author: post.author,
        created_at: post.created_at,
        url: post.url,
        story_url: post.story_url,
      });
  });
});

app.get('/create', async (req, res) => {
  const response = await fetch(
    'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'
  );
  const data = await response.json();
  const posts = data.hits;
  const createPosts = await posts.map(async post =>
    Post.create({
      title: post.title,
      story_title: post.story_title,
      author: post.author,
      created_at: post.created_at,
      url: post.url,
      story_url: post.story_url,
    })
  );
  if (createPosts.length) {
    res.status(201).json(createPosts);
  } else {
    res.status(400);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.get('/posts', async (req, res) => {
  const allPosts = await Post.find({}).sort({ created_at: 'desc' });
  console.log(allPosts);
  if (allPosts.length) {
    res.status(201).json(allPosts);
  } else {
    res.status(400);
  }
});

app.post('/delete', async (req, res) => {
  await Post.findByIdAndUpdate(req.body.id, { title: null, story_title: null });
  console.log(req.body.id);
  res.status(201).json('success');
});

connect('mongodb://mongo:27017/posts')
  .then(() =>
    app.listen(9000, () => {
      console.log('server on http://localhost:9000');
    })
  )
  .catch(e => {
    console.log(e);
  });
