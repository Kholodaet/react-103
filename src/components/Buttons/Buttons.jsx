import styles from "./Buttons.module.css";

const Buttons = ({ handlePrev, handleNext, isFirst, isLast }) => {
  return (
    <div className={styles.buttons}>
      <button onClick={handlePrev} disabled={isFirst}>
        Prev
      </button>
      <button onClick={handleNext} disabled={isLast}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
