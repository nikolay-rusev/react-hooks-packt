import React, { useReducer, useEffect, useState } from "react";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";
import appReducer from "./reducers";
import Header from "./Header";
import ChangeTheme from "./ChangeTheme";
import { blogTitle } from "./appConfig";
import { ThemeContext, StateContext } from "./contexts";

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
  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts,
  });

  const { user } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - ${blogTitle}`;
    } else {
      document.title = blogTitle;
    }
  }, [user]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <Header text={blogTitle} />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br />
          <UserBar />
          <br />
          {user && <CreatePost />}
          <br />
          <hr />
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}
