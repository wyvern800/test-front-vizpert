import { React, useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import Section from "../Bookcase/Section";

import { Wrapper, ConfirmDeletion, ModalButton } from "./styles";

import { useShelvesState } from "../../context/shelves";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Bookcase = () => {
  const { shelves, setShelves } = useShelvesState();
  const [isDropDisabled, setDropDisabled] = useState(false);
  const [bookDeletionModalOpen, setBookDeletionModalOpen] = useState(false);
  const [bookToBeDeleted, setBookToBeDeleted] = useState({
    start: null,
    source: null,
    book: null,
  });

  /* Used to constantly update the books, to avoid issues realated to CSS/sizes
     Unfortunately that will cause the bookshelf sprite to flick out, Probably will be
     changed in the future */
  /*const [updateKey, setRefreshKey] = useState(1);
    const refreshBooks = () => {
        setRefreshKey(updateKey + 1);
        console.log('refreshed');
    };*/

  /**
   * Send the deletion modal on screen waiting for user's decision
   * @param {any} start The droppable (section) we got the dragable from
   * @param {any} source The section we got our droppable (book) from
   */
  const sendDeletionModal = (start, source) => {
    const bookToBeDeleted = start.list[source.index];

    setBookToBeDeleted({
      start: start,
      source: source,
      book: bookToBeDeleted,
    });
    setBookDeletionModalOpen(true);
  };

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a destination that is valid, otherwise the book will be deleted
    if (destination === undefined || destination === null) {
      const start = shelves[source.droppableId];
      sendDeletionModal(start, source);
      return;
    }

    // Make sure we're actually moving the book
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = shelves[source.droppableId];
    const end = shelves[destination.droppableId];

    //refreshBooks();

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Start by making a new list without the dragged book
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the book at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the book on the column
      const newCol = {
        id: start.id,
        list: newList,
      };

      // Update the state
      setShelves((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the book into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
      setShelves((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));

      return null;
    }
  };

  /**
   * Processes the book deletion
   * @param {any} start The droppable (section) we got the dragable from
   * @param {any} source The section we got our droppable (book) from
   */
  const processBookDeletion = (start, source) => {
    alert("Book #" + bookToBeDeleted.book.title + " has been deleted!");

    const newList = start.list.filter((_, idx) => idx !== source.index);

    // Create a new start column
    const newStartCol = {
      id: start.id,
      list: newList,
    };

    // Update the state
    setShelves((state) => ({
      ...state,
      [newStartCol.id]: newStartCol,
    }));

    // Sets the modal to open
    setBookDeletionModalOpen(false);
  };

  /**
   * Modal Component
   * @returns A component for the Book Deletion modal
   */
  const BookDeletionModal = () => {
    const { start, source } = bookToBeDeleted;

    //console.log(bookToBeDeleted);

    // Closes the modal and sets the states back to normal
    const closeModal = () => {
      setBookDeletionModalOpen(false);
      setBookToBeDeleted({});
    };

    return (
      bookToBeDeleted !== undefined && (
        <Modal open={bookDeletionModalOpen} onClose={() => closeModal()} center>
          <h2>Are you sure you want to delete this book?</h2>
          <p>
            You have dragged the book out of its section, and that action is
            recognized as a deletion intention, do you want to delete it?
          </p>
          <ConfirmDeletion>
            <ModalButton color={'#04d361'}onClick={() => processBookDeletion(start, source)}>
              Yes
            </ModalButton>
            <ModalButton color={'#fb4437'} onClick={() => closeModal()}>No</ModalButton>
          </ConfirmDeletion>
        </Modal>
      )
    );
  };

  return (
    <>
      <BookDeletionModal />
      <DragDropContext onDragEnd={onDragEnd} direction="horizontal">
        <Wrapper>
          {/**<div key={updateKey}>**/}
          {Object.values(shelves).map((col) => (
            <Section col={col} key={col.id} isDropDisabled={isDropDisabled} />
          ))}
          {/**</div>**/}
        </Wrapper>
      </DragDropContext>
    </>
  );
};

export default Bookcase;
