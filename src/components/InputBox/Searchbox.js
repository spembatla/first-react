import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Value } from "sass";
import './styles.scss';
function SearchBox(props) {
const {query, setSearchQuery} = props;

return (
    <input 
    type="text" autofocuus
    className= "Search"
    value = {query}
    onchange= {e => setSearchQuery (e.targget.value)}
    placeholder = "Search"
    />
);
}

export default SearchBox;
