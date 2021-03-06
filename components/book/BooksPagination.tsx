import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Book, BooksAction } from "../../store/api/books/types";
import { UserAction } from "../../store/api/login/types";
import { RootReducerState } from "../../store/types";
import BookCard from "./BookCard";
import BookInfo from "./BookInfo";
import Pagination from "./Pagination";
import { loadBooks } from "./services";

const BooksPagination: React.FC = () => {
  const dispatch: Dispatch<BooksAction | UserAction> = useDispatch();
  const router = useRouter();

  const isLoading = useSelector(
    (state: RootReducerState) => state.apiBooks.isLoading
  );
  const pageState = useSelector(
    (state: RootReducerState) => state.apiBooks.page
  );
  const totalPages = useSelector(
    (state: RootReducerState) => state.apiBooks.totalPages
  );
  const books: Book[] = useSelector(
    (state: RootReducerState) => state.apiBooks.data
  );

  const id = typeof router.query.id === "string" ? router.query.id : "0";

  const page =
    typeof router.query.page === "string" &&
    parseInt(router.query.page) >= 1 &&
    parseInt(router.query.page) <= totalPages
      ? parseInt(router.query.page)
      : pageState;

  const allBooks =
    books.length > 0
      ? books.map((value, idx) => (
          <BookCard
            isSkeleton={false}
            image={value.imageUrl}
            title={value.title}
            author={value.authors.join(", ")}
            pageCount={value.pageCount}
            publisher={value.publisher}
            published={value.published}
            key={`book-${idx}`}
            onClick={() => {
              dispatch({ type: "toggleModal" });
              router.push(`/books/${value.id}`);
            }}
          />
        ))
      : Array.from({ length: 12 }, (value, idx) => (
          <BookCard isSkeleton key={`book-${idx}`} />
        ));

  const show404 = () => {
    return (
      typeof router.query.page === "string" &&
      parseInt(router.query.page) >= 1 &&
      parseInt(router.query.page) > totalPages
    );
  };

  useEffect(() => {
    if (!isLoading && id === "0") {
      loadBooks(dispatch, page.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="overflow-auto">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-4">
        {!show404() && allBooks}
      </div>
      {show404() && (
        <div>
          <h2 className="text-2xl text-center">
            N??o existem livros nessa p??gina.{" "}
            <Link href="/books/page/1">
              Clique aqui para voltar a primeira p??gina.
            </Link>
          </h2>
        </div>
      )}
      <div className="py-6">
        <Pagination
          page={page}
          totalPages={totalPages}
          onClickLeftButton={() => {
            if (!isLoading) {
              dispatch({ type: "changePage", changeType: "-" });
              router.push(`/books/page/${page - 1}`);
              document
                .getElementById("header-books")
                ?.scrollIntoView({ block: "end", behavior: "smooth" });
            }
          }}
          onClickRightButton={() => {
            dispatch({ type: "changePage", changeType: "+" });
            if (!isLoading) {
              router.push(`/books/page/${page + 1}`);
              document
                .getElementById("header-books")
                ?.scrollIntoView({ block: "end", behavior: "smooth" });
            }
          }}
        />
      </div>
      <BookInfo />
    </div>
  );
};

export default BooksPagination;
