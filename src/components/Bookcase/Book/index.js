import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { Container } from './styles';

const Book = ({ title, index }) => {
    return (
        <Draggable draggableId={title} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {title}
                </div>
            )}
        </Draggable>
    );
};

export default Book;
