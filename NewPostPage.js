import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";   
import ArticleForm from "./components/ArticleForm";     
import "./newpost.css";
export default function NewPostPage() {
  const [postType, setPostType] = useState("question");
  const handleSubmit = (payload) => {
    console.log("New Post Payload:", payload);
    alert(
      `Submitted a ${payload.type}!\n\n` +
      JSON.stringify(payload, null, 2)
    );
  };
  return (
    <div className="new-post-page">
      <h1 className="page-title">Create a new post</h1>

      <div className="post-type-box">
        <span className="label">Select Post Type:</span>

        <label>
          <input
            type="radio"
            name="postType"
            value="question"
            checked={postType === "question"}
            onChange={() => setPostType("question")}
          />
          Question
        </label>

        <label>
          <input
            type="radio"
            name="postType"
            value="article"
            checked={postType === "article"}
            onChange={() => setPostType("article")}
          />
          Article
        </label>
      </div>

      {postType === "question" ? (
        <QuestionForm onSubmit={handleSubmit} />
      ) : (
        <ArticleForm onSubmit={handleSubmit} />
      )}
    </div>
  );
}
