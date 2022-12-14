import React, { Component } from 'react';

class Counter1 extends Component {
    state = { 
        count: 0,
        imageUrl: "https://picsum.photos/200"
    };
    
    render() { 
        return (
        <React.Fragment>
            <img src={this.state.imageUrl} alt=""/>
            <br></br>
            <br></br>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        ); 
    }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter1;