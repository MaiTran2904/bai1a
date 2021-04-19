import React, {Component} from 'react';
import ShowCenter from './ShowCenter';
import getData from './dataCenter';

class CenterContent extends Component {

    render() {
          const items = getData();
            return (
                <div>
                    <div id="center-content">

                        <div id="item-center">
                            {                              
                                items.map(item => 
                                    <ShowCenter title={item.title}  image={item.image}/>)
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

export default CenterContent;