// Main search component
import React, { useState } from 'react';

const SearchBar = () => {
    const list = [
        "Rice",
        "Milk",
        "Meat",
        "Egg"

    ];

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {
        if (event.target.value === "") {
            setFilterList(list);
            return;
        }
        const filteredValues = list.filter(
            (item) => item.toLowerCase().indexOf(event.target.value.toLowerCase) !== -1
        );
        setFilterList(filteredValues);
    };

    return (
        <div className="search">
            <div>
                Search: <input name="query" type="text" onChange={handleSearch} />
            </div>
            {filterList &&
                filterList.map((item) => (
                    <div>{item}</div> //Display each item
                ))}
        </div>

        
    )

};
export default SearchBar;