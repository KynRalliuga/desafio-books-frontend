import { ListBooks } from "./api/books/types";
import { User } from "./api/login/types";

export interface RootReducerState {
  apiLogin: User;
  apiBooks: ListBooks;
}
