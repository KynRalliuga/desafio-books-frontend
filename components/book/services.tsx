import { Dispatch } from "react";
import { BooksAction, ResponseListBooksApi } from "../../store/api/books/types";
import { urlApi } from "../../store/api/variables";

export async function loadBooks(
  dispatch: Dispatch<BooksAction>,
  page = "1",
  amount = "12"
) {
  const token = localStorage.getItem("token");

  const optionsFetch = {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const urlApiBooksQuery = `${urlApi.books}?${new URLSearchParams({
    page,
    amount,
  })}`;

  const response = await fetch(urlApiBooksQuery, optionsFetch);
  if (response.status === 200) {
    const data: ResponseListBooksApi = await response.json();
    dispatch({ type: "setListBooks", ...data });
  } else {
    dispatch({ type: "clearListBooks" });
  }
}
