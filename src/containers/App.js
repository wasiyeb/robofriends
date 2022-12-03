import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        // console.log('constructor')
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})});        
        // console.log('componentDidMount')
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })    
    }

    render() {
        const {robots, searchfield} = this.state;//to cleanup (this.state) from the filter, return and if statment
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? //robots.length === 0
        <h1>Loading</h1> :    
        (
            <div className='tc'>
                <div className='header'>
                    <h1 className='f1 b'>RoboFriends</h1>
                    <div className='search'>
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>
                </div>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App