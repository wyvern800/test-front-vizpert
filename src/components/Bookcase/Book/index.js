import React, { useEffect, useState } from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { Wrapper } from './styles';

const Book = ({ book, index }) => {
    const { title, img } = book;

    /**
     * Draws the book cover
     * @param {string} img The book's cover image
     * @returns rendered book cover image
     */
    const BookCover = ({ img }) => {
        let [icon, setIcon] = useState('');

        const importIcon = async () => {
            let importedIcon = await import(`../../../assets/${img}.svg`);
            setIcon(importedIcon.default);
        };

        useEffect(() => {
            importIcon();
        }, []);

        return <img alt="" src={icon} />;
    };

    return (
        <Draggable draggableId={title} index={index}>
            {(provided, snapshot) => (
                <Wrapper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}>
                    <BookCover img={img} />
                </Wrapper>
            )}
        </Draggable>
    );
};

export default Book;
