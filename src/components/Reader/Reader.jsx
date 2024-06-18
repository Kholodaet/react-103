import { useState } from "react";
import css from "./Reader.module.css";
import Progress from "../Progress";
import Title from "../Title/Title";
import Buttons from "../Buttons/Buttons";
import Article from "../Articles/Articles";

export default function Reader({ items }) {
  const [idx, setIdx] = useState(0);

  const handlePrev = () => {
    setIdx(idx - 1);
  };

  const handleNext = () => {
    setIdx(idx + 1);
  };

  const isFirst = idx === 0;
  const isLast = idx === items.length - 1;
  const currentArticle = items[idx];

  return (
    <div className={css.container}>
      <header className={css.header}>
        <Title />
        <Buttons
          handlePrev={handlePrev}
          handleNext={handleNext}
          isFirst={isFirst}
          isLast={isLast}
        />
        <Progress current={idx + 1} total={items.length} />
      </header>

      <Article topic={currentArticle.topic} text={currentArticle.text} />
    </div>
  );
}
