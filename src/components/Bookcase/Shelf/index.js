import { React, useState } from 'react';
import Book from '../Book';

import { Container } from './styles';

import { Droppable } from 'react-beautiful-dnd';

const Shelf = ({ col: { list, id }, orientation }) => {
    return (
        <Droppable droppableId={id} direction="horizontal">
            {(provided) => (
                <Container
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        //border: '1px solid brown',
                        width: '382px',
                        height: '100px'
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            minWidth: '100%'
                        }}
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
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

export default Shelf;
