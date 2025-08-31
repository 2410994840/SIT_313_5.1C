import React, { useState } from "react";
import "./articleform.css";
export default function ArticleForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      type: "article",
      title: title.trim(),
      abstract: abstract.trim(),
      content: content.trim(),
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
    };
    onSubmit?.(payload);
  };
  const disabled = !title.trim() || !content.trim();
  return (
    <form className="form-block" onSubmit={handleSubmit}>
      <h2>Write an Article</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter a descriptive title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Abstract</label>
        <textarea
          rows={3}
          placeholder="Enter a 1-paragraph abstract"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Article Text</label>
        <textarea
          rows={8}
          placeholder="Write your article content here…"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Tags</label>
        <input
          type="text"
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
<div className="form-actions">
  <button type="submit" disabled={disabled}>Post</button>
</div>
    </form>
  );
}