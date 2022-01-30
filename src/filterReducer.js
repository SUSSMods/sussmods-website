import { defaultFilters } from "./FiltersContext";

const filterReducer = (state, action) => {
  const newOption = action.filterItem.option;
  const newHeader = action.filterItem.header;
  const filterArr = state[newHeader];

  let newState;

  switch (action.type) {
    case "ADD_FILTER":
      if (!filterArr.includes(newOption)) {
        newState = {
          ...state,
          [newHeader]: [...filterArr, newOption],
        };
      }
      break;

    case "REMOVE_FILTER":
      newState = {
        ...state,
        [newHeader]: filterArr.filter((option) => option !== newOption),
      };

      // check if all filters disabled, then return to default filters
      const appliedFilters = [].concat(...Object.values(newState));
      if (appliedFilters.length < 1) {
        newState = defaultFilters;
      }

      break;

    case "CLEAR_FILTERS":
      newState = defaultFilters;
      break;

    default:
      newState = state;
  }

  return newState;
};

export default filterReducer;
