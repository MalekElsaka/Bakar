import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import SortIcon from './SortIcon';
import { formatDate, mapStatus } from '../../lib/utils';


const TransactionsTable = ({ currentTransactions, sortConfig, requestSort }) => {
    const columns = [
        { key: 'amount', label: 'Amount', width: '21%' },
        { key: 'currency', label: 'Currency', width: '20%' },
        { key: 'cardholder', label: 'Cardholder', width: '25%' },
        { key: 'status', label: 'Status', width: '24%' },
        { key: 'created_at', label: 'Created', width: '9%' }
    ];

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map(column => (
                        <TableHead 
                            key={column.key}
                            className={`w-[${column.width}] text-nowrap text-[15px] ${column.key === 'created_at' ? 'pr-0' : ''}`}
                        >
                            {column.label} <SortIcon columnName={column.key} sortConfig={sortConfig} requestSort={requestSort} />
                        </TableHead>
                    ))}
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
    );
};

export default TransactionsTable