import React, { useState, useEffect } from "react";

import { TITLE, TEXT } from "../Constants";
import { DEL } from "./Constants";
import "./NewsItem.css";

export default function NewsItem({ news, handleRemoveNews, handleChangeNews }) {
  const { title, text, id } = news;
  const [titleNews, setTitleNews] = useState(title);
  const [textNews, setTextNews] = useState(text);
  const checkIsChanged = (newText, oldText, name) => {
    if (newText !== oldText) {
      handleChangeNews(id, newText, name);
    }
  };

  return (
    <div className="itemContainer">
      <input
        className="title"
        name="title"
        value={titleNews}
        placeholder={TITLE}
        onChange={(e) => setTitleNews(e.target.value)}
        onBlur={(e) => checkIsChanged(titleNews, title, "title")}
      />
      <textarea
        className="text"
        name="text"
        placeholder={TEXT}
        onChange={(e) => setTextNews(e.target.value)}
        onBlur={(e) => checkIsChanged(textNews, text, "text")}
        value={textNews}
      />
      <input
        className="buttonDel"
        onClick={() => handleRemoveNews(id)}
        type="button"
        value={DEL}
      />
    </div>
  );
}
