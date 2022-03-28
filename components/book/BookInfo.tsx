import { useRouter } from "next/router";
import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BooksAction } from "../../store/api/books/types";
import { UserAction } from "../../store/api/login/types";
import { RootReducerState } from "../../store/types";
import Modal from "../modal/Modal";
import BookInfoModal from "./BookInfoModal";
import { loadBook } from "./services";

const BookInfo: React.FC = () => {
  const dispatch: Dispatch<BooksAction | UserAction> = useDispatch();
  const router = useRouter();

  const id = typeof router.query.id === "string" ? router.query.id : "0";

  const showModal = useSelector(
    (state: RootReducerState) => state.apiBooks.showModal
  );
  const page = useSelector((state: RootReducerState) => state.apiBooks.page);
  const selectedBook = useSelector(
    (state: RootReducerState) => state.apiBooks.selectedBook
  );

  useEffect(() => {
    if (showModal) {
      loadBook(dispatch, id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, id]);

  useEffect(() => {
    if (id !== "0" && !showModal) {
      dispatch({ type: "toggleModal" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Modal
      showModal={showModal ?? false}
      onClickClose={() => {
        dispatch({ type: "toggleModal" });
        dispatch({ type: "clearBook" });
        router.push(`/books/page/${page}`);
      }}
    >
      <BookInfoModal
        isSkeleton={false}
        title={selectedBook?.title}
        description={selectedBook?.description}
        authors={selectedBook?.authors}
        pageCount={selectedBook?.pageCount}
        category={selectedBook?.category}
        imageUrl={selectedBook?.imageUrl}
        isbn10={selectedBook?.isbn10}
        isbn13={selectedBook?.isbn13}
        language={selectedBook?.language}
        publisher={selectedBook?.publisher}
        published={selectedBook?.published}
      />
    </Modal>
  );
};

export default BookInfo;
