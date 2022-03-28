import Image from "next/image";
import React from "react";
import { baseName } from "../helpers";
import styles from "../../styles/Books.module.css";

interface bookInfoModalInterface {
  isSkeleton?: boolean;
  title?: string;
  description?: string;
  authors?: string[];
  pageCount?: number;
  category?: string;
  imageUrl?: string;
  isbn10?: string;
  isbn13?: string;
  language?: string;
  publisher?: string;
  published?: number;
}

const BookInfoModal: React.FC<bookInfoModalInterface> = (props) => {
  const {
    isSkeleton,
    imageUrl,
    title,
    authors,
    pageCount,
    publisher,
    published,
    language,
    isbn10,
    isbn13,
    description,
  } = props;

  const imageEl =
    imageUrl && !isSkeleton ? (
      <Image src={imageUrl} width="349" height="512" alt={baseName(imageUrl)} />
    ) : (
      <div
        className={`bg-blue-400 animate-pulse h-full min-h-[350px] w-full ${
          isSkeleton ? "block" : "none"
        }`}
      />
    );

  const titleEl =
    title && !isSkeleton ? (
      <h2 className="text-3xl">{title}</h2>
    ) : (
      <>
        <div className="py-2">
          <div
            className={`bg-[#333333] animate-pulse h-6 w-full ${
              isSkeleton ? "block" : "none"
            }`}
          />
        </div>
        <div className="py-2">
          <div
            className={`bg-[#333333] animate-pulse h-6 w-full ${
              isSkeleton ? "block" : "none"
            }`}
          />
        </div>
      </>
    );

  const authorEl =
    authors && !isSkeleton ? (
      <h4 className="text-theme-purple text-xs font-normal pb-6">
        {authors.join(", ")}
      </h4>
    ) : (
      <div className="pb-6">
        <div
          className={`bg-theme-purple animate-pulse h-4 w-2/3 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const publishedEl =
    published && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`${published} páginas`}
      </p>
    ) : (
      <div className="py-0.5 flex justify-end w-full">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-1/6 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const publisherEl =
    publisher && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`${publisher} páginas`}
      </p>
    ) : (
      <div className="py-0.5 flex justify-end w-full">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-2/6 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const languageEl =
    language && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`${language} páginas`}
      </p>
    ) : (
      <div className="py-0.5 flex justify-end w-full">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-3/6 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const isbn10El =
    isbn10 && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`${isbn10} páginas`}
      </p>
    ) : (
      <div className="py-0.5 flex justify-end w-full">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-4/6 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const isbn13El =
    isbn13 && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`${isbn13} páginas`}
      </p>
    ) : (
      <div className="py-0.5 flex justify-end w-full">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-2/6 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const pageCountEl =
    pageCount && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`${pageCount} páginas`}
      </p>
    ) : (
      <div className="py-0.5 flex justify-end w-full">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-1/6 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const titlexsEl =
    title && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`${title} páginas`}
      </p>
    ) : (
      <div className="py-0.5 flex justify-end w-full">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-2/6 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const descriptionEl =
    description && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`${description} páginas`}
      </p>
    ) : (
      <>
        <div className="py-0.5 w-full">
          <div className={`bg-[#999999] animate-pulse h-3 w-full`} />
        </div>
        <div className="py-0.5 w-full">
          <div className={`bg-[#999999] animate-pulse h-3 w-full`} />
        </div>
        <div className="py-0.5 w-full">
          <div className={`bg-[#999999] animate-pulse h-3 w-full`} />
        </div>
        <div className="py-0.5 w-full">
          <div className={`bg-[#999999] animate-pulse h-3 w-full`} />
        </div>
        <div className="py-0.5 w-full">
          <div className={`bg-[#999999] animate-pulse h-3 w-full`} />
        </div>
        <div className="py-0.5 w-full">
          <div className={`bg-[#999999] animate-pulse h-3 w-full`} />
        </div>
        <div className="py-0.5 w-full">
          <div className={`bg-[#999999] animate-pulse h-3 w-1/3`} />
        </div>
      </>
    );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 h-full overflow-auto md:overflow-visible">
        <div className={styles.bookModalImage}>{imageEl}</div>
        <div className="description-book-modal">
          {titleEl}
          {authorEl}
          <div className="pb-8" />
          <div className="text-xs text-medium pb-2">
            <p>INFORMAÇÕES</p>
          </div>
          <div className="grid grid-cols-2 gap-1 text-xs text-medium">
            <p>Página</p>
            {pageCountEl}
            <p>Editora</p>
            {publisherEl}
            <p>Publicação</p>
            {publishedEl}
            <p>Idioma</p>
            {languageEl}
            <p>Título Original</p>
            {titlexsEl}
            <p>ISBN-10</p>
            {isbn10El}
            <p>ISBN-13</p>
            {isbn13El}
          </div>
          <div className="pb-8" />
          <div className="text-xs text-medium pb-2">
            <p>RESENHA DA EDITORA</p>
          </div>
          {descriptionEl}
        </div>
      </div>
    </>
  );
};

export default BookInfoModal;
