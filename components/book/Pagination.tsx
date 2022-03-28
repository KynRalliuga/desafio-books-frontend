import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

interface paginationInterface {
  page: number;
  totalPages: number;
  onClickLeftButton: (event: React.FormEvent<HTMLButtonElement>) => void;
  onClickRightButton: (event: React.FormEvent<HTMLButtonElement>) => void;
}

const Pagination: React.FC<paginationInterface> = (props) => {
  const { page, totalPages, onClickLeftButton, onClickRightButton } = props;
  return (
    <>
      <div className="flex items-center justify-center lg:justify-end w-full">
        <button
          className={`rounded-full w-8 h-8 p-1 mr-4 border border-[#333333]/[0.2] lg:hidden ${
            page === 1 ? "opacity-40" : ""
          }`}
          disabled={page === 1}
          onClick={onClickLeftButton}
        >
          <ChevronLeftIcon />
        </button>

        <span>
          Página {page} de {totalPages}
        </span>

        <button
          className={`rounded-full w-8 h-8 p-1 ml-4 border border-[#333333]/[0.2] hidden lg:inline-block ${
            page === 1 ? "opacity-40" : ""
          }`}
          disabled={page === 1}
          onClick={onClickLeftButton}
        >
          <ChevronLeftIcon />
        </button>
        <button
          className={`rounded-full w-8 h-8 p-1 ml-2 border border-[#333333]/[0.2] ${
            page >= totalPages ? "opacity-40" : ""
          }`}
          disabled={page >= totalPages}
          onClick={onClickRightButton}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </>
  );
};

export default Pagination;
