import React, { useState } from "react";
import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import useBoard from "../../store/Board";
import "./Board.css";
import AddCard from "../../components/AddCard/AddCard";

const BoardPage = () => {
  const { board, setBoard } = useBoard();

  const handleColumnMove = (_card, source, destination) => {
    updatedBoard = moveColumn(board, source, destination);
    setBoard(useBoard);
  };
  const handleCardMove = (_card, source, destination) => {
    const updateBoard = moveCard(board, source, destination);
    setBoard(updateBoard);
  };

  const getColumn = (card) => {
    const column = board.columns.filter((column) =>
      column.cards.includes(card)
    );
    return column[0];
  };

  const getGradient = (card) => {
    const column = getColumn(card);
    const title = column.title;
    if (title === "TODO") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)",
      };
    } else if (title === "Doing") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)",
      };
    } else if (title === "Completed") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)",
      };
    } else if (title === "Backlog") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65,65, 0.67) -1.72%,rgba(134, 48, 220) 163.54%)",
      };
    }
  };

  return (
    <div className="board-container">
      <span>To-Do Board</span>
      <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        inColumnDragEnd={handleColumnMove}
        renderCard={(props) => (
          <div className="kanban-card" style={getGradient(props)}>
            <div>
              <span>{props.title}</span>
              <button
                className="remove-button"
                type="button"
                onClick={() => {
                  const updateBoard = removeCard(
                    board,
                    getColumn(props),
                    props
                  );
                  setBoard(updateBoard);
                }}
              >
                <RxCross2 color="white" size={15} />
              </button>
            </div>
            <span>{props.description}</span>
          </div>
        )}
        renderColumnHeader={(props) => {
          const [modelOpen, setModelOpne] = useState(false);

          const handleAddCard = (title, details) => {
            const card = {
              id: new Date().getTime(),
              title,
              description: details,
            };

            const updateBoard = addCard(board, props, card);
            setBoard(updateBoard);
            setModelOpne(false);
          };

          return (
            <div className="column-header">
              <span>{props.title}</span>
              <IoMdAdd
                color="white"
                size={25}
                title="add card"
                onClick={() => setModelOpne(true)}
              />
              <AddCard
                visible={modelOpen}
                onClose={() => setModelOpne(false)}
                handleAddCard={handleAddCard}
              />
            </div>
          );
        }}
      >
        {board}
      </Board>
    </div>
  );
};

export default BoardPage;
