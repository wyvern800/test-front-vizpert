import { React, useState } from 'react';
import { Wrapper } from './styles';
import { DragDropContext } from 'react-beautiful-dnd';

import Shelf from '../Bookcase/Shelf';

import { colors, sizes }  from '../../utils/utils'

const Bookcase = () => {
    const upperBooksList = [
        {
            id: '1',
            title: 'A',
            color: colors.red,
            size: sizes.small
        },
        {
            id: '2',
            title: 'B',
            color: colors.blue,
            size: sizes.medium
        },
        {
            id: '3',
            title: 'C',
            color: colors.yellow,
            size: sizes.big
        }
    ];

    const lowerBooksList = [
        {
            id: '4',
            title: 'D',
            color: colors.red,
            size: 1
        },
    ];

    const initialColumns = {
        upper: {
            id: 'upper',
            list: [...upperBooksList]
        },
        bottom: {
            id: 'bottom',
            list: [...lowerBooksList]
        }
    };

    const [columns, setColumns] = useState(initialColumns);

    const onDragEnd = ({ source, destination }) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) return null;

        // Make sure we're actually moving the item
        if (
            source.droppableId === destination.droppableId &&
            destination.index === source.index
        )
            return null;

        // Set start and end variables
        const start = columns[source.droppableId];
        const end = columns[destination.droppableId];

        // If start is the same as end, we're in the same column
        if (start === end) {
            // Move the item within the list
            // Start by making a new list without the dragged item
            const newList = start.list.filter((_, idx) => idx !== source.index);

            // Then insert the item at the right location
            newList.splice(destination.index, 0, start.list[source.index]);

            // Then create a new copy of the column object
            const newCol = {
                id: start.id,
                list: newList
            };

            // Update the state
            setColumns((state) => ({ ...state, [newCol.id]: newCol }));
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

            // Insert the item into the end list
            newEndList.splice(destination.index, 0, start.list[source.index]);

            // Create a new end column
            const newEndCol = {
                id: end.id,
                list: newEndList
            };

            // Update the state
            setColumns((state) => ({
                ...state,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol
            }));
            return null;
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd} direction="horizontal">
            {Object.values(columns).map((col) => (
                <Shelf col={col} key={col.id} />
            ))}
        </DragDropContext>
    );
};

export default Bookcase;
