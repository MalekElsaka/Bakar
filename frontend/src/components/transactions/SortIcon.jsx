import React from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

const SortIcon = ({ columnName, sortConfig, requestSort }) => {
    const sortItem = sortConfig.find(item => item.key === columnName);
    const sortOrder = sortConfig.findIndex(item => item.key === columnName) + 1;

    return (
        <span
            onClick={(e) => {
                e.stopPropagation();
                requestSort(columnName);
            }}
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

export default SortIcon