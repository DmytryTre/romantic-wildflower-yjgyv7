import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";

import NewsItem from "/src/components/NewsItem";
import NewsForm from "/src/components/NewsForm";

import { getNews } from "/src/helpers/getNews";
import { setNews } from "/src/helpers/setNews";

import { NEWS, LIST, EMPTY } from "./Constants";
import "./NewsPage.css";

const list = getNews();

export default function NewsPage() {
  const [newsList, setNewsList] = useState(list);

  const handleSetNews = (event) => {
    event.preventDefault();
    const actualList = [
      ...newsList,
      {
        title: event.target[0].value,
        text: event.target[1].value,
        id: uuidv1(),
      },
    ];
    setNewsList(actualList);
    setNews(actualList);
  };

  const handleChangeNews = (id, text, name) => {
    const changedList = newsList.map((item) => {
      if (id === item.id) {
        item[name] = text;

        return item;
      } else return item;
    });

    setNews(changedList);
  };

  const handleRemoveNews = (id) => {
    const filteredList = newsList.filter((item) => item.id !== id);
    setNewsList(filteredList);
    setNews(filteredList);
  };

  return (
    <div>
      <NewsForm handleSetNews={handleSetNews} />
      <span>{`${LIST} ${NEWS}`}</span>
      <div className="itemsContainer">
        {newsList.length ? (
          newsList.map((item) => (
            <NewsItem
              key={item.id}
              handleRemoveNews={handleRemoveNews}
              handleChangeNews={handleChangeNews}
              news={item}
            />
          ))
        ) : (
          <span>{`${LIST} ${EMPTY}`}</span>
        )}
      </div>
    </div>
  );
}
