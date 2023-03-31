import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div>
      <div>
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="py-2 px-2 border border-black rounded-md mr-[5px] text-center"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="py-2 px-2 border border-black rounded-md mr-[5px] text-center"
          >
            Next
          </button>
        )}
        <p className="text-center">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
