import React, {Component} from 'react';
import ShowLeft1 from './ShowLeft1';
import getData from './dataUp';

class Left1Content extends Component {

    render() {
          const items = getData();
            return (
                <div>
                    <div id="left-content">

                        <div id="item-left">
                            {                              
                                items.map(item => 
                                    <ShowLeft1 title={item.title}  image={item.image}/>)
                            }
                                <div style={{clear: 'both'}}/>                          
                        </div>
                        <div style={{clear: 'both'}}/>  
                    </div>
                    <div style={{clear: 'both'}}/>                 
                </div>
            );
    }
}
// if (item.title=2)

export default Left1Content;