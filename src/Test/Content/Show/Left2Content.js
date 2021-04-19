import React, {Component} from 'react';
import ShowLeft2 from './ShowLeft2';
import getData from './dataDown';

class Left2Content extends Component {

    render() {
          const items = getData();
            return (
                <div>
                    <div id="left-content">

                        <div id="item-left">
                            {                              
                                items.map(item => 
                                    <ShowLeft2 title={item.title}/>)
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

export default Left2Content;