import React from "react";

function SearchBox(props) {
    const {query, setSearchQuery} = props;

    return(
        <input 
        type="text" autoFocus
        className="form-control search"
        value={query}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search"
        />
    );
}

export default SearchBox;