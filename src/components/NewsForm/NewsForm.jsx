import { TITLE, TEXT } from "../Constants";
import { ADD, NEWS } from "./Constants";
import "./NewsForm.css";

export default function NewsForm({ handleSetNews, newsItem }) {
  return (
    <div className="formContainer">
      <span>{`${ADD} ${NEWS}`}</span>
      <form className="form" onSubmit={handleSetNews}>
        <span>{TITLE}</span>
        <input className="title" name="title" />
        <span>{TEXT}</span>
        <textarea className="text" name="text" />
        <input className="button" type="submit" value={ADD} />
      </form>
    </div>
  );
}
