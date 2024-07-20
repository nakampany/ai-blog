"use client";

import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen p-12">
      <h1 className="text-center text-2xl mb-8">AI Blog Reviewer</h1>
      <Reviewer />
    </main>
  );
}

function Reviewer() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");

  function onReview() {
    console.log("onReview", title, tags, body);
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="タイトル"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="block w-full border-0 p-2 mb-4"
      />
      <input
        type="text"
        name="tags"
        placeholder="タグ（カンマ区切りで5個まで）"
        value={tags}
        onChange={(event) => setTags(event.target.value)}
        className="block w-full border-0 p-2 mb-4"
      />
      <textarea
        name="body"
        placeholder="本文（Markdown記法）"
        rows={10}
        value={body}
        onChange={(event) => setBody(event.target.value)}
        className="block w-full border-0 p-2 mb-4"
      ></textarea>
      <button
        type="button"
        className="float-right rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white hover:bg-indigo-500 focus:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onReview}
      >
        Review By ChatGPT
      </button>
    </div>
  );
}
