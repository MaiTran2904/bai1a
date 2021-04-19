import React, { Component } from 'react';

class ShowCard extends Component {

    render() {
        return (
            <div className="product">
                <div className="text">
                    <div className="p-name"><a href="">{this.props.type}</a></div>
                </div>
                <div className="p-img">
                    <img src={this.props.image} width={200} height="200"/>
                </div>
                <div className="text">
                    <div className="p-card">{this.props.type }</div>
                    <div className="p-price">Please call</div>
                    <input type="button" className="button" name="add" defaultValue="Add to cart"/>
                </div>
                <div className="clear"/>
            </div>
        );
    }
}

export default ShowCard;