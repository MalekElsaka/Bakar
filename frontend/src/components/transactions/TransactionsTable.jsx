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
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[21%] text-nowrap text-[15px]">
                        Amount <SortIcon columnName="amount" sortConfig={sortConfig} requestSort={requestSort} />
                    </TableHead>
                    <TableHead className="w-[20%] text-nowrap text-[15px]">
                        Currency <SortIcon columnName="currency" sortConfig={sortConfig} requestSort={requestSort} />
                    </TableHead>
                    <TableHead className="w-[25%] text-nowrap text-[15px]">
                        Cardholder <SortIcon columnName="cardholder" sortConfig={sortConfig} requestSort={requestSort} />
                    </TableHead>
                    <TableHead className="w-[24%] text-nowrap text-[15px]">
                        Status <SortIcon columnName="status" sortConfig={sortConfig} requestSort={requestSort} />
                    </TableHead>
                    <TableHead className="w-[9%] text-nowrap text-[15px] pr-0">
                        Created <SortIcon columnName="created_at" sortConfig={sortConfig} requestSort={requestSort} />
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
    );
};

export default TransactionsTable