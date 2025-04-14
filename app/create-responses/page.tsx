"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AddResponseForm() {
  const [form, setForm] = useState({
    category: "",
    userInput: "",
    response: "",
    reference: "",
    keywords: [] as string[],
  });

  const [keywordInput, setKeywordInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keywordInput.trim()) {
      e.preventDefault();
      if (!form.keywords.includes(keywordInput.trim().toLowerCase())) {
        setForm((prev) => ({
          ...prev,
          keywords: [...prev.keywords, keywordInput.trim().toLowerCase()],
        }));
      }
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (index: number) => {
    setForm((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "responses"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      alert("Response added!");
      setForm({
        category: "",
        userInput: "",
        response: "",
        reference: "",
        keywords: [],
      });
      setKeywordInput("");
    } catch (err) {
      console.error(err);
      alert("Error adding response");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
      <input
        name="userInput"
        placeholder="User Input"
        value={form.userInput}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
      <textarea
        name="response"
        placeholder="Chatbot Response"
        value={form.response}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
      <input
        name="reference"
        placeholder="Reference"
        value={form.reference}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />

      {/* Keyword Tag Input */}
      <div>
        <label className="block mb-1 font-medium">Keywords</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {form.keywords.map((kw, idx) => (
            <span
              key={idx}
              className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
            >
              {kw}
              <button
                type="button"
                onClick={() => handleRemoveKeyword(idx)}
                className="text-red-500 hover:text-red-700 ml-1"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          value={keywordInput}
          onChange={(e) => setKeywordInput(e.target.value)}
          onKeyDown={handleAddKeyword}
          placeholder="Type a keyword and press Enter"
          className="w-full border p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
