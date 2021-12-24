import { React, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Shelf from '../Bookcase/Shelf';

import { Wrapper } from './styles';

import { colors, sizes } from '../../utils/utils';

//import { ReactComponent as book_f } from '../../assets/book_f.svg';

const Bookcase = () => {
    const upperBooksList = [
        {
            id: '1',
            title: 'A',
            color: colors.yellow,
            size: sizes.medium,
            img: 'book_a'
        },
        {
            id: '2',
            title: 'B',
            color: colors.red,
            size: sizes.small,
            img: 'book_b'
        },
        {
            id: '3',
            title: 'C',
            color: colors.orange,
            size: sizes.big,
            img: 'book_c'
        }
    ];

    const lowerBooksList = [
        {
            id: '4',
            title: 'D',
            color: colors.purple,
            size: sizes.big,
            img: 'book_d'
        },
        {
            id: '5',
            title: 'E',
            color: colors.blue,
            size: sizes.tiny,
            img: 'book_e'
        },
        {
            id: '6',
            title: 'F',
            color: colors.purple,
            size: sizes.small,
            img: 'book_f'
        },
        {
            id: '7',
            title: 'G',
            color: colors.purple,
            size: sizes.small,
            img: 'book_g'
        },
        {
            id: '8',
            title: 'H',
            color: colors.blue,
            size: sizes.small,
            img: 'book_h'
        },
        {
            id: '9',
            title: 'I',
            color: colors.green,
            size: sizes.medium,
            img: 'book_i'
        }
    ];

    const initialShelves = {
        upper: {
            id: 'upper',
            list: [...upperBooksList],
            orientation: 'flex-end'
        },
        bottom: {
            id: 'bottom',
            list: [...lowerBooksList],
            orientation: 'flex-start'
        }
    };

    const [shelves, setShelves] = useState(initialShelves);

    const onDragEnd = ({ source, destination }) => {
        // Make sure we have a destination that is valid
        if (destination === undefined || destination === null) return null;

        // Make sure we're actually moving the book
        if (
            source.droppableId === destination.droppableId &&
            destination.index === source.index
        )
            return null;

        // Set start and end variables
        const start = shelves[source.droppableId];
        const end = shelves[destination.droppableId];

        // If start is the same as end, we're in the same column
        if (start === end) {
            // Move the book within the shelves
            // Start by making a new list without the dragged book
            const newList = start.list.filter((_, idx) => idx !== source.index);

            // Then insert the book at the right location
            newList.splice(destination.index, 0, start.list[source.index]);

            // Then create a new copy of the book on the shelf
            const newCol = {
                id: start.id,
                list: newList
            };

            // Update the state
            setShelves((state) => ({ ...state, [newCol.id]: newCol }));
            return null;
        } else {
            // If start is different from end, we need to update multiple columns
            // Filter the start list like before
            const newStartList = start.list.filter(
                (_, idx) => idx !== source.index
            );

            // Create a new start column
            const newStartCol = {
                id: start.id,
                list: newStartList
            };

            // Make a new end list array
            const newEndList = end.list;

            // Insert the book into the end list
            newEndList.splice(destination.index, 0, start.list[source.index]);

            // Create a new end column
            const newEndCol = {
                id: end.id,
                list: newEndList
            };

            // Update the state
            setShelves((state) => ({
                ...state,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol
            }));
            return null;
        }
    };

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
            direction="horizontal">
            <Wrapper>
                {Object.values(shelves).map((col) => (
                    <Shelf
                        col={col}
                        key={col.id}
                        orientation={col.orientation}
                    />
                ))}
            </Wrapper>
        </DragDropContext>
    );
};

export default Bookcase;
