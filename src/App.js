import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/nav';
import './Nav/nav.css';
import Search from './Search/search'
import './Search/search.css'

// import './Content/content.js';
// import './Content/content.css';

export const navList = [
    {
        name: 'item-1',
        link: 'item-1'
    },
    {
        name: 'item-2',
        link: 'item-2'
    },
    {
        name: 'item-3',
        link: 'item-3'
    }
];

class App extends Component {


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <Search />
                </header>

                <app-body className="App-body">
                    {/*<Content />*/}
                </app-body>
            </div>
        );
    }
}

export default App;
