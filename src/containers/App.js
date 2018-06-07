import React, { Component} from 'react';
import { connect } from 'react-redux';
import { setSearchField } from "../actions";

import CardList from '../components/CardList';
import { cheese } from '../cheese';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";



const mapStateToProps = state => {
    
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component{
    constructor(){
        super()
        this.state = {
            cheese: cheese,
        }
    }

   render(){
        const { cheese } = this.state;
        const { searchField, onSearchChange} = this.props;
        const filteredCheese = cheese.filter(c => {
            const currentName = c.name.toLowerCase()
            const includesSearchTerm = currentName.includes(searchField.toLowerCase())
            return includesSearchTerm
            // return c.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })


        //console.log(filteredCheese);

        return(
            <div className="background">
                <h1> Cheese </h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList fcheese={ filteredCheese } />
                    </ErrorBoundry>
                </Scroll>
            </div>
    );
   }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

