import React, { useState, useMemo } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import transactionsData from "@/data/transactions";
import Chevron from '@/components/ui/chevron';

const TxnsInfoPage = () => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const mapStatus = (status) => {
        const statusMap = {
            1: 'Succeeded',
            2: 'Pending',
            3: 'Canceled',
            4: 'Failed',
            5: 'Refunded',
            6: 'Disputed'
        };
        return statusMap[status] || 'unknown';
    };

    const [transactions] = useState(transactionsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [sortConfig, setSortConfig] = useState([]);
    const [isFilterDroped, setIsFilterDropped] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [checkedField, setCheckedField] = useState('');

    const handleCheckboxChange = (field) => {
        setCheckedField(prev => prev === field ? '' : field);
        setCurrentPage(1);
    };

    const filteredTransactions = useMemo(() => {
        if (!filterText || !checkedField) {
            return transactions;
        }

        const searchText = filterText.toLowerCase();
        return transactions.filter(transaction => {
            switch (checkedField) {
                case 'amount':
                    return transaction.amount.toString().toLowerCase().startsWith(searchText);
                case 'currency':
                    return transaction.currency.toLowerCase().includes(searchText);
                case 'cardholder':
                    return transaction.cardholder.toLowerCase().includes(searchText);
                case 'status':
                    return mapStatus(transaction.status).toLowerCase().includes(searchText);
                case 'created':
                    return formatDate(transaction.created_at).toLowerCase().includes(searchText);
                default:
                    return false;
            }
        });
    }, [transactions, filterText, checkedField]);

    const sortedTransactions = useMemo(() => {
        let sortedItems = [...filteredTransactions];
        if (sortConfig.length > 0) {
            sortedItems.sort((a, b) => {
                for (const { key, direction } of sortConfig) {
                    let aValue = a[key];
                    let bValue = b[key];

                    if (key === 'created_at') {
                        aValue = new Date(aValue);
                        bValue = new Date(bValue);
                    }

                    if (aValue < bValue) {
                        return direction === 'ascending' ? -1 : 1;
                    }
                    if (aValue > bValue) {
                        return direction === 'ascending' ? 1 : -1;
                    }
                }
                return 0;
            });
        }
        return sortedItems;
    }, [filteredTransactions, sortConfig]);

    const indexOfLastTransaction = currentPage * itemsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
    const currentTransactions = sortedTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage);

    const requestSort = (key, e) => {
        e.stopPropagation();
        setSortConfig(prevSort => {
            const existingSortIndex = prevSort.findIndex(item => item.key === key);
            if (existingSortIndex !== -1) {
                const currentDirection = prevSort[existingSortIndex].direction;
                const newSort = [...prevSort];
                if (currentDirection === 'ascending') {
                    newSort[existingSortIndex] = { key, direction: 'descending' };
                } else {
                    newSort.splice(existingSortIndex, 1);
                }
                return newSort;
            } else {
                return [...prevSort, { key, direction: 'ascending' }];
            }
        });
    };

    const SortIcon = ({ columnName }) => {
        const sortItem = sortConfig.find(item => item.key === columnName);
        const sortOrder = sortConfig.findIndex(item => item.key === columnName) + 1;

        return (
            <span
                onClick={(e) => requestSort(columnName, e)}
                className="inline-flex items-center cursor-pointer hover:bg-gray-100 p-1 rounded"
            >
                {!sortItem ? (
                    <ArrowUpDown className="h-4 w-4" />
                ) : sortItem.direction === 'ascending' ? (
                    <ArrowUp className="h-4 w-4" />
                ) : (
                    <ArrowDown className="h-4 w-4" />
                )}
                {sortOrder > 0 && <span className="ml-1 text-xs">({sortOrder})</span>}
            </span>
        );
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="mx-auto px-[25px] max-w-[1400px] mt-4">
            <div className="mb-4 border-b justify-between w-[160px] border-black flex">
                <input
                    value={filterText}
                    onChange={(e) => {
                        setFilterText(e.target.value);
                        setCurrentPage(1);
                    }}
                    onFocus={() => setIsFilterDropped(true)}
                    placeholder="Filter"
                    className="text-[17px] focus:outline-none w-[85%] tracking-wide mb-1"
                />
                <Chevron
                    onClick={() => setIsFilterDropped(prev => !prev)}
                    className={`cursor-pointer transition-transform duration-[300ms] ${isFilterDroped ? 'rotate' : ''}`}
                    direction="down"
                />
            </div>
            <div className={`overflow-hidden flex gap-6 transition-all duration-[300ms] max-h-0 w-[550px] opacity-0 ${isFilterDroped ? "max-h-[150px] h-[50px] opacity-100" : "h-0"}`}>
                <label className="text-[15px]">
                    <input
                        className="mr-2 cursor-pointer w-4 h-4"
                        type="checkbox"
                        checked={checkedField === 'amount'}
                        onChange={() => handleCheckboxChange('amount')}
                    />
                    Amount
                </label>

                <label className="text-[15px]">
                    <input
                        className="mr-2 cursor-pointer w-4 h-4"
                        type="checkbox"
                        checked={checkedField === 'currency'}
                        onChange={() => handleCheckboxChange('currency')}
                    />
                    Currency
                </label>

                <label className="text-[15px]">
                    <input
                        className="mr-2 cursor-pointer w-4 h-4"
                        type="checkbox"
                        checked={checkedField === 'cardholder'}
                        onChange={() => handleCheckboxChange('cardholder')}
                    />
                    Cardholder
                </label>

                <label className="text-[15px]">
                    <input
                        className="mr-2 cursor-pointer w-4 h-4"
                        type="checkbox"
                        checked={checkedField === 'status'}
                        onChange={() => handleCheckboxChange('status')}
                    />
                    Status
                </label>

                <label className="text-[15px]">
                    <input
                        className="mr-2 cursor-pointer w-4 h-4"
                        type="checkbox"
                        checked={checkedField === 'created'}
                        onChange={() => handleCheckboxChange('created')}
                    />
                    Created
                </label>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[21%] text-nowrap text-[15px]">
                            Amount <SortIcon columnName="amount" />
                        </TableHead>
                        <TableHead className="w-[20%] text-nowrap text-[15px]">
                            Currency <SortIcon columnName="currency" />
                        </TableHead>
                        <TableHead className="w-[25%] text-nowrap text-[15px]">
                            Cardholder <SortIcon columnName="cardholder" />
                        </TableHead>
                        <TableHead className="w-[24%] text-nowrap text-[15px]">
                            Status <SortIcon columnName="status" />
                        </TableHead>
                        <TableHead className="w-[9%] text-nowrap text-[15px] pr-0">
                            Created <SortIcon columnName="created_at" />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentTransactions.length > 0 ? (
                        currentTransactions.map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium text-wrap">{transaction.amount}</TableCell>
                                <TableCell className="font-medium">{transaction.currency}</TableCell>
                                <TableCell className="font-medium">{transaction.cardholder}</TableCell>
                                <TableCell className="font-medium">
                                    <span className="border p-2 border-black">{mapStatus(transaction.status)}</span>
                                </TableCell>
                                <TableCell className="pr-0 text-wrap">{formatDate(transaction.created_at)}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center pt-12">
                                No results found for this filter
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-12 pb-4">
                <div className="text-[15px] ml-2">
                    Viewing {indexOfFirstTransaction + 1}-{Math.min(indexOfLastTransaction, sortedTransactions.length)} of {sortedTransactions.length} results
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
        </div>
    );
}

export default TxnsInfoPage;
