import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { Wrapper } from './styles';

const Book = ({ title, index }) => {
    return (
        <Draggable draggableId={title} index={index}>
            {(provided, snapshot) => (
                <Wrapper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}>
                    {title}
                </Wrapper>
            )}
        </Draggable>
    );
};

export default Book;
