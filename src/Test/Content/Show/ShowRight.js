import React, { Component } from 'react';

class ShowRight extends Component {

    render() {
        return (
            <div className="product-right">
                
                <div className="p-img">
                    <img src={this.props.image} width={100} height="60"/>
                </div>
                <div className="text">
                    <div className="p-title"><a href="">{this.props.title}</a></div>
                </div>
                <div className="clear"/>
            </div>
        );
    }
}

export default ShowRight;