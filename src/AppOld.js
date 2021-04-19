import logo from './logo.svg';
import './App.css';
// import React, {Component} from 'react';

function Header(){
    return (
        <div id="header">
        <div id="header-logo">
          <a href="http://www.nationallobsterhatchery.co.uk" className="h-logo">
            <img src="images/lobster.png" />
          </a>
          <h1 className="h-logo">This is header</h1>
          <div style={{clear: 'both'}} />
        </div>
        <div id="header-menu">
          <div id="h-menu">
            <ul className="h-ul-menu">
              <li><a href="index.html#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">News</a>
                <ul>
                  <li><a href="#">Sub menu</a></li>
                  <li><a href="#">Sub menu</a></li>
                </ul>
              </li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div style={{clear: 'both'}} />
          </div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
        );
}

// function App() {
//     return ( <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//         <One></One>
//         <h1><One/></h1>
//         <Two></Two>
//         <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
        
//         Như Mai
//       </a>
//     </header>
//   </div>
//     );
// }

var Content = function(){
    return (
        <div id="content">
        {/* this is the content for menu */}
        <div id="left-content">
          <h1>Category</h1>
          <ul className="drop">
            <li><a href="#">Menu item 1</a></li>
            <li><a href="#">Menu item 2</a></li>
            <li><a href="#">Menu item 3</a>
              <ul className="drop">
                <li><a href="#">Menu item 3.1</a></li>
                <li><a href="#">Menu item 3.2</a></li>
                <li><a href="#">Menu item 3.3</a></li>
                <li><a href="#">Menu item 3.4</a>
                  <ul className="drop">
                    <li><a href="#">Menu item 3.4.1</a></li>
                    <li><a href="#">Menu item 3.4.2</a></li>
                    <li><a href="#">Menu item 3.4.3</a></li>
                    <li><a href="#">Menu item 3.4.4</a></li>
                    <li><a href="#">Menu item 3.4.5</a>
                      <ul className="drop">
                        <li><a href="#">Menu item 3.4.5.1</a></li>
                        <li><a href="#">Menu item 3.4.5.2</a></li>
                        <li><a href="#">Menu item 3.4.5.3</a></li>
                        <li><a href="#">Menu item 3.4.5.4</a>
                          <ul className="drop">
                            <li><a href="#">Menu item 3.4.5.1.1</a></li>
                            <li><a href="#">Menu item 3.4.5.1.2</a></li>
                            <li><a href="#">Menu item 3.4.5.1.3</a></li>
                            <li><a href="#">Menu item 3.4.5.1.4</a>
                              <ul className="drop">
                                <li><a href="#">Menu item 3.4.5.1.4.1</a></li>
                                <li><a href="#">Menu item 3.4.5.1.4.2</a></li>
                                <li><a href="#">Menu item 3.4.5.1.4.3</a></li>
                                <li><a href="#">Menu item 3.4.5.1.4.4</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>  
                </li>
              </ul> 
            </li>
            <li><a href="#">Menu item 4</a></li>
            <li><a href="#">Menu item 5</a></li>
            <li><a href="#">Menu item 6</a></li>
            <li><a href="#">Menu item 4</a></li>
          </ul>
        </div>
        {/* this is a content for item  */}
        <div id="right-content">
          <h2>Product : </h2>
          <div id="products">
            <div className="product">
              <div className="text">
                <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
              </div>
              <div className="p-img">
                <img src="images/mayanh1.jpg" width={200} height={200} />
              </div>
              <div className="text">
                <div className="p-cat">DIGITAL CAMERA </div>
                <div className="p-price">Please Call</div>
                <input type="button" className="button" name="add" defaultValue="Add to cart" />
              </div>
              <div className="clear" />
            </div>
            <div className="product">
              <div className="text">
                <div className="p-name"><a href="item.html">LUMIX DMC-G3</a></div>
              </div>
              <div className="p-img">
                <img src="images/mayanh2.jpg" width={200} height={200} />
              </div>
              <div className="text">
                <div className="p-cat">DIGITAL CAMERA </div>
                <div className="p-price">Please Call</div>
                <input type="button" className="button" name="add" defaultValue="Add to cart" />
              </div>
              <div className="clear" />
            </div>
            <div className="product">
              <div className="text">
                <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
              </div>
              <div className="p-img">
                <img src="images/mayanh3.jpg" width={200} height={200} />
              </div>
              <div className="text">
                <div className="p-cat">DIGITAL CAMERA </div>
                <div className="p-price">Please Call</div>
                <input type="button" className="button" name="add" defaultValue="Add to cart" />
              </div>
              <div className="clear" />
            </div>
            <div className="product">
              <div className="text">
                <div className="p-name"><a href="item.html">LUMIX DMC-G3</a></div>
              </div>
              <div className="p-img">
                <img src="images/mayanh2.jpg" width={200} height={200} />
              </div>
              <div className="text">
                <div className="p-cat">DIGITAL CAMERA </div>
                <div className="p-price">Please Call</div>
                <input type="button" className="button" name="add" defaultValue="Add to cart" />
              </div>
              <div className="clear" />
            </div>	
            <div className="product">
              <div className="text">
                <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
              </div>
              <div className="p-img">
                <img src="images/mayanh3.jpg" width={200} height={200} />
              </div>
              <div className="text">
                <div className="p-cat">DIGITAL CAMERA </div>
                <div className="p-price">Please Call</div>
                <input type="button" className="button" name="add" defaultValue="Add to cart" />
              </div>
              <div className="clear" />
            </div>
            <div style={{clear: 'both'}} />
          </div>
          <div style={{clear: 'both'}} />
        </div>
        <div style={{clear: 'both'}} />
      </div>
    );
}

var Footer = () => {
    return (
        <div id="footer"> 
        <div id="btfooter">
          Copyright © 2015 Passerelles Numeriques.org. All rights reserved.<br />
          <a href="index.html#">Products</a>
          &nbsp;|&nbsp;
          <a href="index.html">Service</a>
          &nbsp;|&nbsp;
          <a href="index.html">About Us</a>
          &nbsp;|&nbsp;
        </div>
      </div>
    );
}



// class Four extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Đây là đâu ?</h3>
//                 <p>Tôi là ai ?</p>
//             </div>
//         );
//     }
// }

// export {App};
export {Header};
export {Content};
export {Footer};