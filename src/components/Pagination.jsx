import React from "react";

const Pagination = ({ next, prev, onNext, onPrev }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {prev && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onPrev}
        >
          Previous
        </button>
      )}
      {next && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onNext}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
