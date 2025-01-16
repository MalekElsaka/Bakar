import React from 'react';

const Pagination = ({ 
    currentPage, 
    totalPages, 
    handlePrevPage, 
    handleNextPage,
    indexOfFirstTransaction,
    indexOfLastTransaction,
    totalResults
}) => (
    <div className="flex justify-between items-center mt-12 pb-4">
        <div className="text-[15px] ml-2">
            Viewing {indexOfFirstTransaction + 1}-{Math.min(indexOfLastTransaction, totalResults)} of {totalResults} results
        </div>
        <div className="text-[15px]">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`border border-gray-400 px-2 py-1 mr-6 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-black hover:text-white transition-colors duration-300'}`}
            >
                Previous
            </button>
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`border border-gray-400 px-2 py-1 ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-black hover:text-white transition-colors duration-300'}`}
            >
                Next
            </button>
        </div>
    </div>
);

export default Pagination