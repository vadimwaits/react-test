import React from 'react';

const loadData = function () {
    let searchInputValue = document.getElementById("searchInput").value;
    console.log(searchInputValue);
}

export default () => (
    <div className="searchbar">
        <input id="searchInput" type="text"/>
        <button onClick={loadData}>Загрузить</button>
    </div>
)