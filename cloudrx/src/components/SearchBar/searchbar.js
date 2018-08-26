import React, { Component } from 'react';
import './searchbar.css';

class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render(){
    return (
        <div className="Searchbar">
            <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}/>
        </div>
    );
}
onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChange(term);
}

}

export default Searchbar;
