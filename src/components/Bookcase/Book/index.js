import React, { useEffect, useState } from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { Wrapper } from './styles';

const Book = ({ book, index }) => {
    const { title, img } = book;

    const [icon, setIcon] = useState('');

    // Imports the icon from the assets folder
    const importIcon = async () => {
        let importedIcon = await import(`../../../assets/${img}.svg`);
        setIcon(importedIcon.default);
    };

    // Executes once when this component is loaded
    useEffect(() => {
        importIcon();
    }, []);

    return (
        <Draggable draggableId={title} index={index}>
            {(provided, snapshot) => (
                <Wrapper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}>
                    <img alt={title} src={icon} />
                </Wrapper>
            )}
        </Draggable>
    );
};

export default Book;
