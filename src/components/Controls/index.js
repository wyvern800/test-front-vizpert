import React, { useState } from "react";
import {
  Wrapper,
  Board,
  Filters,
  Filter,
  Organize,
  Separator,
  Lady,
  BoardWrapper,
  SortBy,
} from "./styles";

import lady from "../../assets/lady.svg";

import filterAlpha from "../../assets/filter_alphabetic.svg";
import filterColors from "../../assets/filter_colors.svg";
import filterSizes from "../../assets/filter_sizes.svg";

import organizeButtonSprite from "../../assets/button.svg";

import { useShelvesState } from "../../context/shelves";

const Controls = () => {
  const { shelves, setShelves } = useShelvesState();

  const [filters, setFilters] = useState({
    alphabetic: false,
    colors: false,
    sizes: false,
  });
  
  const [selectedFilter, setSelectedFilter] = useState("");

  /**
   * Selects the filter from the filter buttons
   * @param {string} selected The filter we're selecting
   * @returns void
   */
  const selectFilter = (selected) => {
    const { filterName } = selected;

    // If we're selecting the same filter, deactivate it
    if (filterName === selectedFilter) {
      setFilters({
        alphabetic: false,
        colors: false,
        sizes: false,
      });
      setSelectedFilter("");
      return;
    }

    const newFilters = {
      alphabetic: false,
      colors: false,
      sizes: false,
    };
    newFilters[filterName] = true;

    setSelectedFilter(filterName);

    setFilters(newFilters);
    //console.log(filters);
  };

  /**
   * Organizes the bookcase's shelves
   * @returns false If no ordenation was selected
   */
  const organize = () => {
    let shelvesCopy = shelves;
    let { upper, lower } = shelvesCopy;

    switch (selectedFilter) {
      case "alphabetic":
        // Sort upper books
        let listUpper = upper.list;
        listUpper.sort((a, b) => a.title.localeCompare(b.title));

        // Sort lower section
        let listLower = lower.list;
        listLower.sort((a, b) => a.title.localeCompare(b.title));

        // Set the new shelves state
        setShelves({
          upper: {
            id: "upper",
            list: listUpper,
          },
          lower: { id: "lower", list: listLower },
        });
        break;
      case "colors":
        // Sort upper books
        let listUpper2 = upper.list;
        listUpper2.sort((a, b) => a.color - b.color);

        // Sort lower section
        let listLower2 = lower.list;
        listLower2.sort((a, b) => a.color - b.color);

        // Set the new shelves state
        setShelves({
          upper: {
            id: "upper",
            list: listUpper2,
          },
          lower: { id: "lower", list: listLower2 },
        });
        break;
      case "sizes":
        // Sort upper books
        let listUpper3 = upper.list;
        listUpper3.sort((a, b) => a.size - b.size);

        // Sort lower section
        let listLower3 = lower.list;
        listLower3.sort((a, b) => a.size - b.size);

        // Set the new shelves state
        setShelves({
          upper: {
            id: "upper",
            list: listUpper3,
          },
          lower: { id: "lower", list: listLower3 },
        });
        break;
      default:
        console.log("No ordernation selected")
        return;
    }

    //console.log(upper);
    console.log("organize("+selectedFilter+")");
    console.log("after:", shelves)
  };

  const FilterButton = ({ icon, width, selected }) => {
    const { value } = selected;

    return (
      <Filter
        selected={value}
        width={width}
        onClick={() => selectFilter(selected)}
      >
        <img src={icon} />
      </Filter>
    );
  };

  return (
    <Wrapper>
      <Lady alt="lady" src={lady} />
      <Board>
        <BoardWrapper>
          <SortBy>SORT BY</SortBy>
          <Filters>
            <FilterButton
              icon={filterAlpha}
              width={"10%"}
              selected={{
                filterName: "alphabetic",
                value: filters["alphabetic"],
              }}
            />
            <FilterButton
              icon={filterColors}
              width={"20%"}
              selected={{ filterName: "colors", value: filters["colors"] }}
            />
            <FilterButton
              icon={filterSizes}
              width={"20%"}
              selected={{ filterName: "sizes", value: filters["sizes"] }}
            />
          </Filters>
          <Separator />
          <Organize
            alt="organize"
            src={organizeButtonSprite}
            onClick={() => organize()}
          />
        </BoardWrapper>
      </Board>
    </Wrapper>
  );
};

export default Controls;
