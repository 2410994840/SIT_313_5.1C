import React, { useState } from "react";
import "./queform.css";
export default function QuestionForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      type: "question",
      title: title.trim(),
      details: details.trim(),
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
    };
    onSubmit?.(payload);
  };
  const disabled = !title.trim() || !details.trim();
  return (
    <form className="form-block" onSubmit={handleSubmit}>
      <h2>Ask a Question</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Start your question with how, what, why, etc."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Describe Your Problem</label>
        <textarea
          rows={15}
          placeholder="Explain your problem in detail"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Tags</label>
        <input
          type="text"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
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
