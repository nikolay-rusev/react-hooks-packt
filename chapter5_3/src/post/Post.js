import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts";

function Post({ title, content, author }) {
  const { secondaryColor } = useContext(ThemeContext);
  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

export default Post;
