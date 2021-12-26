import { React, useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Section from '../Bookcase/Section';

import { Wrapper } from './styles';

import { colors, sizes } from '../../utils/utils';

//import { ReactComponent as book_f } from '../../assets/book_f.svg';

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
    },
    {
        id: '10',
        title: 'J',
        color: colors.green,
        size: sizes.medium,
        img: 'book_i'
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
        list: [...upperBooksList]
    },
    lower: {
        id: 'lower',
        list: [...lowerBooksList]
    }
};

const Bookcase = () => {
    const [shelves, setShelves] = useState(initialShelves);
    const [isDropDisabled, setDropDisabled] = useState(false);

    /* Used to constantly update the books, to avoid issues realated to CSS/sizes
     Unfortunately that will cause the bookshelf sprite to flick out, Probably will be
     changed in the future */
    /*const [updateKey, setRefreshKey] = useState(1);
    const refreshBooks = () => {
        setRefreshKey(updateKey + 1);
        console.log('refreshed');
    };*/

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
        <DragDropContext onDragEnd={onDragEnd} direction="horizontal">
            <Wrapper>
                {/**<div key={updateKey}>**/}
                {Object.values(shelves).map((col) => (
                    <Section
                        col={col}
                        key={col.id}
                        isDropDisabled={isDropDisabled}
                    />
                ))}
                {/**</div>**/}
            </Wrapper>
        </DragDropContext>
    );
};

export default Bookcase;
