import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  showNextButton: boolean;
};

const PaginationButtons = ({ showNextButton }: Props) => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <FaChevronLeft className="h-5 w-5" />
            Previous
          </div>
        </Link>
      )}

      {showNextButton && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <FaChevronRight className="h-5 w-5" />
            Next
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
