import {
  SetListBooks,
  SetBook,
  ChangePage,
  ClearBook,
  ClearListBooks,
  StartLoading,
  EndLoading,
} from "./types";

export const setListBooks = (): SetListBooks => ({
  type: "setListBooks",
  data: [],
  selectedBook: null,
  page: 1,
  totalPages: 1,
  totalItems: 0,
});

export const setBook = (): SetBook => ({
  type: "setBook",
  id: "",
  title: "",
  description: "",
  authors: [],
  pageCount: 0,
  category: "",
  imageUrl: "",
  isbn10: "",
  isbn13: "",
  language: "",
  publisher: "",
  published: 0,
});

export const clearListBooks = (): ClearListBooks => ({
  type: "clearListBooks",
});

export const clearBook = (): ClearBook => ({
  type: "clearBook",
});

export const changePage = (): ChangePage => ({
  type: "changePage",
  changeType: "+",
});

export const startLoading = (): StartLoading => ({
  type: "startLoading",
});

export const endLoading = (): EndLoading => ({
  type: "endLoading",
});
