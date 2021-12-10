import React, { useReducer, useEffect } from "react";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";
import appReducer from "./reducers";
import Header from "./Header";
import { blogTitle } from "./appConfig";
import { ThemeContext } from "./contexts";

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl",
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl",
  },
];

export default function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts,
  });

  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - ${blogTitle}`;
    } else {
      document.title = blogTitle;
    }
  }, [user]);

  return (
    <ThemeContext.Provider
      value={{ primaryColor: "deepskyblue", secondaryColor: "coral" }}
    >
      <div style={{ padding: 8 }}>
        <Header text={blogTitle} />
        <UserBar user={user} dispatch={dispatch} />
        <br />
        {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
        <br />
        <hr />
        <PostList posts={posts} />
      </div>
    </ThemeContext.Provider>
  );
}
