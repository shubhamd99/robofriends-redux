import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField, requestRobots } from '../store/actions';

class App extends Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}


	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot =>{
       	return robot.name.toLowerCase().includes(searchField.toLowerCase());
       })
		
		return isPending ? <div className='tc'><h3 className='f3'>Loading</h3></div> :
		 (
		     <div className='tc'>
		        <h1 className='f1'>RoboFriends</h1>
		        <SearchBox searchChange={onSearchChange} />
		        <ErrorBoundary>
		        	<CardList robots={filteredRobots} />
		        </ErrorBoundary>
		     </div>
          );
       
	}
}

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);