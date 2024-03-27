import SearchPageHeader from "@/components/GoogleSearch/Header/SearchPageHeader";
import SearchResults from "@/components/GoogleSearch/SearchResults";
import { SearchResponse } from "@/lib/types";
import dummyData from "@/response";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  results: SearchResponse;
};

const Search = ({ results }: Props) => {
  const router = useRouter();
  return (
    <div className="bg-white dark:bg-zinc-800">
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <SearchPageHeader />

      <section>
        <SearchResults results={results} />
      </section>
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? dummyData
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      )
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
        });

  return {
    props: {
      results: data,
    },
  };
};
