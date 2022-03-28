import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Book, BooksAction } from "../../store/api/books/types";
import { UserAction } from "../../store/api/login/types";
import { RootReducerState } from "../../store/types";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import { loadBooks } from "./services";

const BooksPagination: React.FC = () => {
  const dispatch: Dispatch<BooksAction | UserAction> = useDispatch();
  const router = useRouter();

  const isLoading = useSelector(
    (state: RootReducerState) => state.apiBooks.isLoading
  );
  const totalPages = useSelector(
    (state: RootReducerState) => state.apiBooks.totalPages
  );
  const books: Book[] = useSelector(
    (state: RootReducerState) => state.apiBooks.data
  );

  const [show404, setShow404] = useState(false);

  const page =
    typeof router.query.page === "string" &&
    parseInt(router.query.page) >= 1 &&
    parseInt(router.query.page) <= totalPages
      ? parseInt(router.query.page)
      : totalPages;

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
              key={`book-${idx}`}
            />
          );
        })
      : Array.from({ length: 12 }, (value, idx) => (
          <BookCard isSkeleton key={`book-${idx}`} />
        ));

  useEffect(() => {
    loadBooks(dispatch, page.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setShow404(
      typeof router.query.page === "string" &&
        parseInt(router.query.page) > totalPages
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, totalPages]);

  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-4">
        {!show404 && allBooks}
      </div>
      {show404 && (
        <div>
          <h2 className="text-2xl text-center">
            Não existem livros nessa página.{" "}
            <Link href="/books/page/1">
              Clique aqui para voltar a primeira página.
            </Link>
          </h2>
        </div>
      )}
      <div className="py-6">
        <Pagination
          page={page}
          totalPages={totalPages}
          onClickLeftButton={() => {
            dispatch({ type: "changePage", changeType: "-" });
            if (!isLoading) {
              router.push(`/books/page/${page - 1}`);
            }
          }}
          onClickRightButton={() => {
            dispatch({ type: "changePage", changeType: "+" });
            if (!isLoading) {
              router.push(`/books/page/${page + 1}`);
            }
          }}
        />
      </div>
    </>
  );
};

export default BooksPagination;
