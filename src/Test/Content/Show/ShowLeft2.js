import React, { Component } from 'react';

class ShowLeft2 extends Component {

    render() {
        return (
            <div className="product-left">
                
                
                <div className="text">
                    <div className="p-title"><a href="">{this.props.title}</a></div>
                </div>
                <div className="clear"/>
            </div>
        );
    }
}

export default ShowLeft2;