import React from "react"
import PropTypes from "prop-types"

function Post({ title, content, author }) {
    return (
        <div>
            <h3>{title}</h3>
            <div>{content}</div>
            <br />
            <i>Written by <b>{author}</b></i>
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string
}

export default Post