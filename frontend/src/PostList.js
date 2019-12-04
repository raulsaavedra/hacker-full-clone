import React from 'react';
import Post from './Post';
const PostList = ({posts}) => {
  return (
    <div>
      {posts.map((post, i) => {
        if ((post.story_title || post.title !== null)) {
          const currentDate = new Date()
          const postDate = new Date(post.created_at)
          const renderDate = (date) => {
            const today = new Date
            const yesterday = new Date; yesterday.setDate(today.getDate() - 1)
            if(date.toLocaleDateString() == today.toLocaleDateString()) {
              const todayDate = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
              return todayDate
            } else if (date.toLocaleDateString() == yesterday.toLocaleDateString()) {
              return 'Yesterday'
            }
            return date.toLocaleDateString('en-US', {
              day : 'numeric',
              month : 'long'
            })
          }

        return <Post 
        id={post._id}
        key={i} 
        title={post.story_title ? post.story_title : post.title} 
        author={post.author} 
        date={`
        ${renderDate(postDate)}
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