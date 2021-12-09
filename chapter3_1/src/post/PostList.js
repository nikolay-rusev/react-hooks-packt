import React from "react";
import PropTypes from "prop-types"
import Post from "./Post";

function PostList({ posts = [] }) {
    return (
        <div>
            {
                posts.map((p, i) => {
                    <React.Fragment key={"post-" + i}>
                        <Post {...p} />
                        <hr />
                    </React.Fragment>
                })
            }
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.array
}

export default PostList