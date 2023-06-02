import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import css from "./AddCard.module.css";
const AddCard = ({ visible, onClose, handleAddCard }) => {
  const customStyles = {
    background: "rgb(58,58,58)",
    padding: "20px",
    width: "50%",
    top: "-3rem",
    height: "fit-content",
    maxWidth: "40rem",
  };
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  return (
    <Rodal
      animation="fade"
      customStyles={customStyles}
      visible={visible}
      onClose={onClose}
    >
      <div className={css.container}>
        <div className="">
          <span className={css.lable}>Card Title</span>
          <input
            type="text"
            className={css.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <span className={css.lable}>Details</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={css.input}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>

        <button
          className={css.save}
          disabled={title === "" && details === ""}
          onClick={() => {
            handleAddCard(title, details);
            setTitle("");
            setDetails("");
          }}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
};

export default AddCard;
