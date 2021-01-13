import React, { Component } from 'react';
import { navList } from '../App';


class Nav extends Component {
    render() {
        return(
            <nav className="nav">
                <ul className="nav-list">
                    { navList.map((item, index) => {
                        return(
                            <li key={index} className="list-item"><a className="list-link" href={'#' + item.link}>{item.name}</a></li>
                        )
                    })
                    }
                </ul>
            </nav>
        )
    }
}

export default Nav;