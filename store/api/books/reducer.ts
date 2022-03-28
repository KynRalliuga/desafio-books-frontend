import produce from "immer";
import { ListBooks, BooksAction } from "./types";

const initialState: ListBooks = {
  data: [],
  selectedBook: null,
  page: 1,
  totalPages: 1,
  totalItems: 0,
};

const reducer = (state = initialState, action: BooksAction): ListBooks => {
  switch (action.type) {
    case "setBook":
      return produce(state, (draft) => {
        draft.selectedBook = {
          id: action.id,
          title: action.title,
          description: action.description,
          authors: action.authors,
          pageCount: action.pageCount,
          category: action.category,
          imageUrl: action.imageUrl,
          isbn10: action.isbn10,
          isbn13: action.isbn13,
          language: action.language,
          publisher: action.publisher,
          published: action.published,
        };
      });
    case "setListBooks":
      return produce(state, (draft) => {
        draft.data = action.data;
        draft.selectedBook = action.selectedBook;
        draft.page = action.page;
        draft.totalPages = Math.ceil(action.totalPages);
        draft.totalItems = action.totalItems;
      });
    case "clearBook":
      return produce(state, (draft) => {
        draft.selectedBook = initialState.selectedBook;
      });
    case "clearListBooks":
      return produce(state, (draft) => {
        draft.data = initialState.data;
        draft.selectedBook = initialState.selectedBook;
        draft.page = initialState.page;
        draft.totalPages = initialState.totalPages;
        draft.totalItems = initialState.totalItems;
      });
    case "changePage":
      return produce(state, (draft) => {
        if (action.changeType === "+" && draft.page < draft.totalPages) {
          draft.page++;
        } else if (action.changeType === "-" && draft.page > 1) {
          draft.page--;
        } else if (
          action.changeType === "n" &&
          action.pageNumber &&
          action.pageNumber >= 1 &&
          action.pageNumber <= draft.totalPages
        ) {
          draft.page = action.pageNumber;
        }
      });
    default:
      return state;
  }
};

export default reducer;
