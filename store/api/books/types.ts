import { Action } from "redux";

export interface Book {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

export interface ListBooks {
  data: Book[];
  selectedBook?: Book | null;
  page: number;
  totalPages: number;
  totalItems: number;
  isLoading?: boolean;
}

export interface ResponseListBooksApi extends ListBooks {
  errors: {
    message: string;
  };
}

export interface ResponseBookApi extends Book {
  errors: {
    message: string;
  };
}

export interface SetListBooks extends Action, ListBooks {
  type: "setListBooks";
}
export interface SetBook extends Action, Book {
  type: "setBook";
}
export interface ClearListBooks extends Action {
  type: "clearListBooks";
}
export interface ClearBook extends Action {
  type: "clearBook";
}
export interface ChangePage extends Action {
  type: "changePage";
  changeType: "+" | "-" | "n";
  pageNumber?: number;
}
export interface StartLoading extends Action {
  type: "startLoading";
}
export interface EndLoading extends Action {
  type: "endLoading";
}

export type BooksAction =
  | SetListBooks
  | SetBook
  | ClearListBooks
  | ClearBook
  | ChangePage
  | StartLoading
  | EndLoading;
