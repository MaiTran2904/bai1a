import React, { Component } from 'react';

class ShowLeft1 extends Component {

    render() {
        return (
            <div className="product-left1">
                
                <div className="p-img">
                    <img src={this.props.image} width={400} height={350}/>
                </div>
                <div className="text">
                    <div className="p-title"><a href="">{this.props.title}</a></div>
                </div>
                <div className="clear"/>
            </div>
        );
    }
}

export default ShowLeft1;