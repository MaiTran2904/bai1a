import React, {Component} from 'react';
import ShowRight from './ShowRight';
import getData from './data';

class RightContent extends Component {

    render() {
          const items = getData();
            return (
                <div>
                    <div id="right-content">

                        <div id="item-right">
                            {                              
                                items.map(item => 
                                    <ShowRight  image={item.image} title={item.title} />)
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

export default RightContent;