import Reader from "../Reader/Reader";
import articles from "../../articles.json";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <Reader items={articles} />
    </div>
  );
}
