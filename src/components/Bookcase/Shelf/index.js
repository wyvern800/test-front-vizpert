import { React, useState } from 'react';
import Book from '../Book';

import { Container } from './styles';

import { Droppable } from 'react-beautiful-dnd';

const Shelf = ({ col: { list, id }, orientation }) => {
    return (
        <Droppable droppableId={id} direction="horizontal">
            {(provided) => (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        border: '1px solid brown',
                        minWidth: '400px',
                        minHeight: '100px',
                        margin: '10px',
                        justifyContent: orientation,
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            minWidth: '100%',
                        }}
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {list.map(({ title }, index) => (
                            <Book key={title} title={title} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>
    );
};

export default Shelf;
