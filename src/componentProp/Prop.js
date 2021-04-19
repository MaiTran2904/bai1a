import React, { Component } from 'react';
function Content(props){
    return(
        <div className="product">
                <div className="text">
                    <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
                </div>
                <div className="p-img">
                    <img src={props.image} width={200} height={200} />
                </div>
                <div className="text">
                    <div className="p-cat">{props.name}</div>
                    <div className="">{props.price}</div>
                </div>
                <div className="clear" />
            </div>
    );
}
class ContentLeft extends Component {
    render() {
        return (
            <div id="header-menu">
            <div id="h-menu">
                <ul className="h-ul-menu">
                    <li><a href="index.html#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div style={{ clear: 'both' }} />
            </div>
        </div>
        );
    }
}



export {Content, ContentLeft};