import React, { useState } from 'react';
import transactionsData from "@/data/transactions";
import FilterSection from '../components/transactions/FilterSection';
import TransactionsTable from '../components/transactions/TransactionsTable';
import Pagination from '../components/transactions/Pagination';
import useTransactions  from '../hooks/useTransactions';


const TxnsInfoPage = () => {
    const [isFilterDropped, setIsFilterDropped] = useState(false);
    
    const {
        currentPage,
        setCurrentPage,
        itemsPerPage,
        sortConfig,
        filterText,
        setFilterText,
        checkedField,
        setCheckedField,
        sortedTransactions,
        requestSort
    } = useTransactions(transactionsData);

    const handleCheckboxChange = (field) => {
        setCheckedField(prev => prev === field ? '' : field);
        setCurrentPage(1);
    };

    const indexOfLastTransaction = currentPage * itemsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
    const currentTransactions = sortedTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage);

    const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

    return (
        <div className="mx-auto px-[25px] max-w-[1400px] mt-4">
            <FilterSection
                filterText={filterText}
                setFilterText={setFilterText}
                isFilterDropped={isFilterDropped}
                setIsFilterDropped={setIsFilterDropped}
                checkedField={checkedField}
                handleCheckboxChange={handleCheckboxChange}
            />
            
            <TransactionsTable
                currentTransactions={currentTransactions}
                sortConfig={sortConfig}
                requestSort={requestSort}
            />
            
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                indexOfFirstTransaction={indexOfFirstTransaction}
                indexOfLastTransaction={indexOfLastTransaction}
                totalResults={sortedTransactions.length}
            />
        </div>
    );
};

export default TxnsInfoPage;