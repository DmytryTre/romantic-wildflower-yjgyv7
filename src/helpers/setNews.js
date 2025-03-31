import Storage from "/src/utils/storage";

const localStorage = new Storage("local");

export const setNews = (news, newsList) => {
  if(newsList) return localStorage.set("news", [...newsList, news]);
  return localStorage.set("news", news);
};
