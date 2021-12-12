import React, { useReducer, useEffect, useState } from "react";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";
import appReducer from "./reducers";
import Header from "./Header";
import ChangeTheme from "./ChangeTheme";
import { blogTitle } from "./appConfig";
import { ThemeContext, StateContext } from "./contexts";

export default function App() {
  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: [],
  });

  const { user } = state;
  
  useEffect(() => {
    fetch("/api/posts")
      .then((result) => result.json())
      .then((posts) => dispatch({ type: "FETCH_POSTS", posts }));
  }, []);

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
