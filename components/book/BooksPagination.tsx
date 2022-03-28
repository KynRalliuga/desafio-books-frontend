import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Book, BooksAction } from "../../store/api/books/types";
import { RootReducerState } from "../../store/types";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import { loadBooks } from "./services";

const BooksPagination: React.FC = () => {
  const dispatch: Dispatch<BooksAction> = useDispatch();

  const page = useSelector((state: RootReducerState) => state.apiBooks.page);

  const totalPages = useSelector(
    (state: RootReducerState) => state.apiBooks.totalPages
  );
  const books: Book[] = useSelector(
    (state: RootReducerState) => state.apiBooks.data
  );

  const allBooks =
    books.length > 0
      ? books.map((value, idx) => {
          const author = value.authors.length > 0 ? value.authors[0] : "";
          return (
            <BookCard
              isSkeleton={false}
              image={value.imageUrl}
              title={value.title}
              author={author}
              pageCount={value.pageCount}
              publisher={value.publisher}
              published={value.published}
              key={idx}
            />
          );
        })
      : Array.from({ length: 12 }, () => <BookCard isSkeleton />);

  useEffect(() => {
    loadBooks(dispatch, page.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-4">
        {allBooks}
      </div>
      <div className="py-6">
        <Pagination
          page={page}
          totalPages={totalPages}
          onClickLeftButton={() => {
            dispatch({ type: "changePage", changeType: "-" });
          }}
          onClickRightButton={() => {
            dispatch({ type: "changePage", changeType: "+" });
          }}
        />
      </div>
    </>
  );
};

export default BooksPagination;
