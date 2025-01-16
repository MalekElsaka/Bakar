import React from 'react';
import Chevron from '@/components/ui/chevron';

const FilterSection = ({ 
    filterText, 
    setFilterText, 
    isFilterDropped, 
    setIsFilterDropped,
    checkedField,
    handleCheckboxChange 
}) => {
    const filterFields = [
        { id: 'amount', label: 'Amount' },
        { id: 'currency', label: 'Currency' },
        { id: 'cardholder', label: 'Cardholder' },
        { id: 'status', label: 'Status' },
        { id: 'created', label: 'Created' }
    ];

    return (
        <>
            <div className="mb-4 border-b justify-between w-[160px] border-black flex">
                <input
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    onFocus={() => setIsFilterDropped(true)}
                    placeholder="Filter"
                    className="text-[17px] focus:outline-none w-[85%] tracking-wide mb-1"
                />
                <Chevron
                    onClick={() => setIsFilterDropped(prev => !prev)}
                    className={`cursor-pointer transition-transform duration-[300ms] ${isFilterDropped ? 'rotate' : ''}`}
                    direction="down"
                />
            </div>
            <div className={`overflow-hidden flex gap-6 transition-all duration-[300ms] max-h-0 w-[550px] opacity-0 ${isFilterDropped ? "max-h-[150px] h-[50px] opacity-100" : "h-0"}`}>
                {filterFields.map(field => (
                    <label key={field.id} className="text-[15px]">
                        <input
                            className="mr-2 cursor-pointer w-4 h-4"
                            type="checkbox"
                            checked={checkedField === field.id}
                            onChange={() => handleCheckboxChange(field.id)}
                        />
                        {field.label}
                    </label>
                ))}
            </div>
        </>
    );
};

export default FilterSection;