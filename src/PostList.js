import React from 'react';
import Post from './Post';
const PostList = ({posts}) => {
  return (
    <div>
      {posts.map((post, i) => {
        if ((post.story_title || post.title !== null)) {
          const currentDate = new Date()
          const date = new Date(post.created_at)
          const monthName = [
           "January",
           "February",
           "March",
           "April",
           "May",
           "June",
           "July",
           "August",
           "September",
           "October",
            "November",
            "December",
          ]
          const month = monthName[date.getMonth()]
          const day = date.getDate();
          const hour = date.getHours();
          const minute = date.getMinutes()
        return <Post 
        key={i} 
        title={post.story_title ? post.story_title : post.title} 
        author={post.author} 
        date={`
        ${date === currentDate - 1 ? 'yesterday' : month + ' ' + day } 
        ${hour >= 10 ? hour : '0' + hour}:${minute >= 10 ? minute : '0' + minute}
        `}
        url={
          post.url ? post.url : post.story_url
        }
        />
        
      } else {
        return null
      }})}
    </div>
  );
};

export default PostList;