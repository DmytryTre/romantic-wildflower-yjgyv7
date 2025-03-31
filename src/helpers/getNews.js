import Storage from "/src/utils/storage";

const localStorage = new Storage("local");

export const getNews = () => localStorage.get("news");
