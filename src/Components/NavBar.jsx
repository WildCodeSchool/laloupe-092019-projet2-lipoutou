import React from 'react';
import './../Grid.css'
import './NavBar.css'

class NavBar extends React.Component{
    render(){
        return(
            <div className="sm-12 md-12 lg-12 row">
                <div className="sm-6 md-6 lg-6">
                    <img src="https://www.dsbrowser.com/documentation/images/4/45/Fleche-gauche.png" className="sm-2 md-2 lg-1 fleche-gauche"/>
                </div>
                <div className="sm-6 md-6 lg-6 end align-center">
                    <button className="row sm-5 md-5 lg-4 button-filter center align-center"><img src="https://www.freeiconspng.com/uploads/filter-icon-2.png" className="filter-logo"/>Filters</button>
                    <img src="https://zupimages.net/up/19/43/t58o.png" className="sm-2 md-2 lg-1 fleche-gauche"/>
                </div>
            </div>
        )
    }
}

export default NavBar;