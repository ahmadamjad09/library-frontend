import { BOOKS,USERS,ROLES,BOOK,USER,ROLE } from "../types/types";
const initialState = {
  books: [],
  users: [],
  roles: [],
  book: [],
  user: [],
  role: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS:
      return {
        ...state,
        books: action.payload
      };
      case USERS:
      return {
        ...state,
        users: action.payload
      };
      case ROLES:
      return {
        ...state,
        roles: action.payload
      };
      case BOOK:
      return {
        ...state,
        book: action.payload
      };
      case USER:
      return {
        ...state,
        user: action.payload
      };
      case ROLE:
      return {
        ...state,
        role: action.payload
      };
    default:
      return state;
  }
};
export default Reducer;
