import { SearchResponse } from "@/lib/types";
import React from "react";
import PaginationButtons from "./PaginationButtons";

type Props = {
  results: SearchResponse;
};

const SearchResults = ({ results }: Props) => {
  console.log(results);
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results?.items?.map((result) => (
        <div className="max-w-xl mb-8" key={result.link}>
          <div className="group">
            <a href={result.link} className="text-sm">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-sm line-clamp-2">{result.snippet}</p>
        </div>
      ))}

      <PaginationButtons
        showNextButton={results.queries?.nextPage ? true : false}
      />
    </div>
  );
};

export default SearchResults;
