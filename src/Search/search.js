import React, { Component } from 'react';

const loadData = function () {
    let inputUrl = document.getElementById("searchInput").value;
    console.log(inputUrl);
    return inputUrl;
}

class search extends Component {

    render() {

        return(
            <div className="searchbar">
                <p>https://jsonplaceholder.typicode.com/users</p>
                <div>
                    <input id="searchInput" type="text"/>
                    <button onClick={loadData}>Загрузить</button>
                </div>
            </div>
        )
    }

    componentDidMount(inputUrl) {
        fetch(inputUrl)
            .then(response => response.json())
            .then(users => console.log(users))
    }
}





export default search;