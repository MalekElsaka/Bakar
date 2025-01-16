import { useState, useMemo } from 'react';
import { formatDate, mapStatus } from '../lib/utils';

const useTransactions = (initialData) => {
    const [transactions] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [sortConfig, setSortConfig] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [checkedField, setCheckedField] = useState('');

    const filteredTransactions = useMemo(() => {
        if (!filterText || !checkedField) return transactions;

        const searchText = filterText.toLowerCase();
        return transactions.filter(transaction => {
            const value = checkedField === 'created' 
                ? formatDate(transaction.created_at)
                : checkedField === 'status'
                    ? mapStatus(transaction.status)
                    : transaction[checkedField];
            
            return String(value).toLowerCase().startsWith(searchText);
        });
    }, [transactions, filterText, checkedField]);

    const sortedTransactions = useMemo(() => {
        let sortedItems = [...filteredTransactions];
        if (sortConfig.length === 0) return sortedItems;

        return sortedItems.sort((a, b) => {
            for (const { key, direction } of sortConfig) {
                let aValue = key === 'created_at' ? new Date(a[key]) : a[key];
                let bValue = key === 'created_at' ? new Date(b[key]) : b[key];

                if (key === 'amount') {
                    aValue = parseFloat(aValue);
                    bValue = parseFloat(bValue);
                }

                if (aValue < bValue) return direction === 'ascending' ? -1 : 1;
                if (aValue > bValue) return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }, [filteredTransactions, sortConfig]);

    const requestSort = (key) => {
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
            }
            return [...prevSort, { key, direction: 'ascending' }];
        });
    };

    return {
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
    };
};

export default useTransactions