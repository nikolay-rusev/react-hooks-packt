import React, { useState } from "react";
import PropTypes from "prop-types";

function CreatePost({ user, posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(evt) {
    setTitle(evt.target.value);
  }

  function handleContent(evt) {
    setContent(evt.target.value);
  }

  function handleCreate() {
    const newPost = { title, content, author: user };
    setPosts([newPost, ...posts]);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author:<b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  );
}

CreatePost.propTypes = {
  user: PropTypes.string,
  posts: PropTypes.array,
  setPosts: PropTypes.func,
};

export default CreatePost;
