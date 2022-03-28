import React from "react";
import Image from "next/image";
import styles from "../../styles/Books.module.css";
import { baseName } from "../helpers";

interface bookCardInterface {
  isSkeleton?: boolean;
  image?: string;
  title?: string;
  author?: string;
  pageCount?: number;
  publisher?: string;
  published?: number;
}

const BookCard: React.FC<bookCardInterface> = (props) => {
  const { isSkeleton, image, title, author, pageCount, publisher, published } =
    props;

  const imageEl =
    image && !isSkeleton ? (
      <Image src={image} width="80" height="122" alt={baseName(image)} />
    ) : (
      <div
        className={`bg-blue-400 animate-pulse h-[122px] w-20 ${
          isSkeleton ? "block" : "none"
        }`}
      />
    );

  const titleEl =
    title && !isSkeleton ? (
      <h3>{title}</h3>
    ) : (
      <div className="py-1">
        <div
          className={`bg-[#333333] animate-pulse h-4 w-full ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const authorEl =
    author && !isSkeleton ? (
      <h4 className="text-theme-purple text-xs font-normal pb-6">{author}</h4>
    ) : (
      <div className="pb-6">
        <div
          className={`bg-theme-purple animate-pulse h-4 w-2/3 ${
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
      <div className="py-1">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-1/2 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const publisherEl =
    publisher && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`Editora ${publisher}`}
      </p>
    ) : (
      <div className="py-1">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-2/3 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  const publishedEl =
    published && !isSkeleton ? (
      <p className="text-[#999999] text-xs font-normal leading-5">
        {`Publicado em ${published}`}
      </p>
    ) : (
      <div className="py-1">
        <div
          className={`bg-[#999999] animate-pulse h-3 w-3/4 ${
            isSkeleton ? "block" : "none"
          }`}
        />
      </div>
    );

  return (
    <>
      <div
        className={`bg-white flex items-center p-4 h-40 w-full overflow-hidden ${styles.bookCardShadow}`}
      >
        <div className={styles.bookCardImage}>{imageEl}</div>
        <div className="pl-4 w-full">
          {titleEl}
          {authorEl}
          {pageCountEl}
          {publisherEl}
          {publishedEl}
        </div>
      </div>
    </>
  );
};

export default BookCard;
