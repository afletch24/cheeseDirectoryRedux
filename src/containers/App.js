import React, { Component} from 'react';
import CardList from '../components/CardList';
import {cheese} from '../cheese';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component{
    constructor(){
        super()
        this.state = {
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

   render(){
        const filteredCheese = cheese.filter(c => {
            
            const currentName = c.name.toLowerCase()
            const includesSearchTerm = currentName.includes(this.state.searchfield.toLowerCase())
            return includesSearchTerm
            // return c.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })


        //console.log(filteredCheese);

        return(
            <div className="background">
                <h1> Cheese </h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList fcheese={ filteredCheese } />
                    </ErrorBoundry>
                </Scroll>
            </div>
    ) 
   }  
}

export default App;