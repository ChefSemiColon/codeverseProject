import React from "react";
import { SearchResult } from "./SearchResult";
import Book from "./Book";

export const SearchResultsList = ({results}) => {
    return (
        <div className="results-list">
          {results.map((result, id) => {
            return <SearchResult result={result.author} key={id} />;
          })}
        </div>
      );
}