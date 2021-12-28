import React, { createContext, useState, useContext } from "react";

import { colors, sizes } from "../utils/utils";

const upperBooksList = [
  {
    id: "2",
    title: "B",
    color: colors.red,
    size: sizes.small,
    img: "book_b",
  },
  {
    id: "1",
    title: "A",
    color: colors.yellow,
    size: sizes.big,
    img: "book_a",
  },
  {
    id: "10",
    title: "I",
    color: colors.green,
    size: sizes.medium,
    img: "book_i",
  },
  {
    id: "3",
    title: "C",
    color: colors.orange,
    size: sizes.giant,
    img: "book_c",
  },
];

const lowerBooksList = [
  {
    id: "4",
    title: "D",
    color: colors.purple,
    size: sizes.giant,
    img: "book_d",
  },
  {
    id: "5",
    title: "E",
    color: colors.cyan,
    size: sizes.tiny,
    img: "book_e",
  },
  {
    id: "6",
    title: "F",
    color: colors.pink,
    size: sizes.small,
    img: "book_f",
  },
  {
    id: "7",
    title: "G",
    color: colors.pink,
    size: sizes.small,
    img: "book_g",
  },
  {
    id: "8",
    title: "H",
    color: colors.blue,
    size: sizes.giant,
    img: "book_h",
  },
];

const ShelvesContext = createContext({
  upper: {
    id: "upper",
    list: [...upperBooksList],
  },
  lower: {
    id: "lower",
    list: [...lowerBooksList],
  },
  setShelves: () => {},
});

const initialShelves = {
  upper: {
    id: "upper",
    list: [...upperBooksList],
  },
  lower: {
    id: "lower",
    list: [...lowerBooksList],
  },
};

export default function ShelvesProvider({ children }) {
  const [shelves, setShelves] = useState(initialShelves);

  return (
    <ShelvesContext.Provider
      value={{
        shelves,
        setShelves,
      }}
    >
      {children}
    </ShelvesContext.Provider>
  );
}

export function useShelvesState() {
  const context = useContext(ShelvesContext);
  const { shelves, setShelves } = context;

  return { shelves, setShelves };
}
