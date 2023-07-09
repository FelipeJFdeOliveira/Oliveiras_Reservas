import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    room: undefined
  },
  hotelName: undefined,
  hotelAddress: undefined,
  amount: undefined,
  selectedRooms: [],
  alldates: []
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        hotelName: state.hotelName,
        hotelAddress: state.hotelAddress,
        amount: state.amount,
        selectedRooms: state.selectedRooms,
        alldates: state.alldates,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};