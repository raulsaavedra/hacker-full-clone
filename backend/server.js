const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const fetch = require('node-fetch');

const connect = url =>
  mongoose.connect(url, {
    useNewUrlParser: true,
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
const CLIENT_BUILD_PATH = path.join(__dirname, '../frontend/build');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(CLIENT_BUILD_PATH));

app.get('/create', async (req, res) => {
  const response = await fetch(
    'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'
  );
  const data = await response.json();
  const posts = data.hits;
  posts.map(post =>
    Post.create({
      title: post.title,
      story_title: post.story_title,
      author: post.author,
      created_at: post.created_at,
      url: post.url,
      story_url: post.story_url,
    })
  );
});

app.get('/posts', async (req, res) => {
  const allPosts = await Post.find({});
  console.log(allPosts);
  res.status(201).json(allPosts);
});

connect('mongodb://localhost:27017/intro')
  .then(() =>
    app.listen(4000, () => {
      console.log('server on http://localhost:4000');
    })
  )
  .catch(e => console.error(e));
