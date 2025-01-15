import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import transactionsData from "@/data/transactions";

const TxnsInfoPage = () => {
    const [transactions] = useState(transactionsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const indexOfLastTransaction = currentPage * itemsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    const totalPages = Math.ceil(transactions.length / itemsPerPage);

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
        <div className="mx-auto px-[25px] max-w-[1400px] mt-20">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="min-w-[150px]">Amount</TableHead>
                        <TableHead className="min-w-[150px]">Currency</TableHead>
                        <TableHead className="min-w-[150px]">Cardholder</TableHead>
                        <TableHead className="min-w-[150px]">Status</TableHead>
                        <TableHead className="w-[125px]">Created</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentTransactions.map((transaction, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{transaction.amount}</TableCell>
                            <TableCell>{transaction.currency}</TableCell>
                            <TableCell>{transaction.cardholder}</TableCell>
                            <TableCell>
                                <span className="border p-2 border-black">{mapStatus(transaction.status)}</span>
                            </TableCell>
                            <TableCell>{formatDate(transaction.created_at)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-12">
                <div className='text-[15px] ml-2'>
                    Viewing {indexOfFirstTransaction + 1}-{Math.min(indexOfLastTransaction, transactions.length)} of {transactions.length} results
                </div>
                <div className='text-[15px]'>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`border border-black px-2 py-1  mr-6 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-black hover:text-white transition-colors duration-300'}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={` border border-black px-2 py-1  ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-black hover:text-white transition-colors duration-300'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TxnsInfoPage;