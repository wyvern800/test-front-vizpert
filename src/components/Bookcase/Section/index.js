import { React, useState } from "react";
import Book from "../Book";

import { Container } from "./styles";

import { Droppable } from "react-beautiful-dnd";

const Section = ({ col: { list, id }, isDropDisabled }) => {
  return (
    <Droppable
      droppableId={id}
      direction="horizontal"
      isDropDisabled={isDropDisabled}
      ignoreContainerClipping={true}
    >
      {(provided) => (
        <Container
          style={{
            //border: '1px solid cyan'
            position: "relative",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              minWidth: "100%",
              minHeight: "10%",
              justifyContent: id === "upper" ? "flex-start" : "flex-end", // To change orientation of the shelves placement
            }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list.map((book, index) => (
              <Book key={book.title} book={book} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </Container>
      )}
    </Droppable>
  );
};

export default Section;
