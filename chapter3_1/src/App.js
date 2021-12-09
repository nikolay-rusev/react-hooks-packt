import React from "react";
import PostList from "./post/PostList";

const posts = [{ title: "React Hooks", content: "The greatest thing since sliced bread!", author: "Nikolay Rusev" },
{ title: "Using React Fragments", content: "Keeping the DOM tree clean!", author: "Nikolay Rusev" }]

export default function App() {
  return <PostList posts={posts} />
}