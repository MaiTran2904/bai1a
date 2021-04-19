import React, { Component } from 'react';
import CenterContent from './CenterContent';
import Left1Content from './Left1Content';
import Left2Content from './Left2Content';
import RightContent from './RightContent';
// import RightContent from './RightContent';
class Content extends Component {
    render() {
        return (
            <div >
                <table>
                    <tr>
                        <td>
                        <Left1Content/>
                <Left2Content/>
                        </td>
                        <td>
                        <CenterContent/>
                        </td>
                        <td>
                        <RightContent/>   
                        </td>
                    </tr>
                </table>
                
                
                        
            </div>
           
        );
    }
}
export default Content;