// Header/index.js
import React from 'react'
import './index.css';

class Header extends React.Component {
    render(){
        const { onAddNote , onDeleteNote } = this.props;

        return (
            <div className="header">
                <div className="title">
                    <span>요니의 Simple Note</span>
                </div>
                <div className="buttons">
                    <button onClick = { onAddNote }>추우-가</button>
                    <button onClick = { onDeleteNote }>사악-제</button>
                </div>
            </div>
        );
    }
}

export default Header;