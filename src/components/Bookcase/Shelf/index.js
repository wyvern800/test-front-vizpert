import { React, useState } from 'react';
import Book from '../Book';

import { Container } from './styles';

import { Droppable } from 'react-beautiful-dnd';

const Shelf = ({ col: { list, id } }) => {
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid black',
                        width: '50px'
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '120px'
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
