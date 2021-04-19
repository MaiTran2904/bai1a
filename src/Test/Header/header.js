import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div id="header">

                <div id="header-menu">
                    <div id="h-menu">
                        <ul className="h-ul-menu">
                            <li><a href="index.html#">Chính trị</a></li>
                            <li><a href="#">Xã hội</a></li>
                            <li><a href="#">Thế giới</a>
                                
                            </li>
                            <li><a href="#">Kinh tế</a></li>
                            <li><a href="#">Thể thao</a></li>
                            <li><a href="#">Giải trí</a></li>
                            <li><a href="#">Pháp luật</a></li>
                            <li><a href="#">Quân sự- Quốc phòng</a></li>
                            <li><a href="#">Sức khỏe</a></li>
                            <li><a href="#">Đời sống</a></li>
                        </ul>
                        <div style={{ clear: 'both' }} />
                    </div>
                </div>
                <div style={{ clear: 'both' }} />
            </div>

        );
    }
}

export default Header;