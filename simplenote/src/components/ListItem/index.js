// ListItem/index.js
import React from 'react'
import './index.css';

class ListItem extends React.Component {
    render(){
        console.log('render NoteList ' + this.props.id);
        const { active,title,contents, onClick } = this.props;
        return (
            <div 
                className={active? "list-item active" : "list-item"} 
                onClick = {onClick} //onClick 이벤트 발생 시 onClick() 호출한다.
            >
                <div className="title">{title?title:'제목'}</div>
                <div className="list-item-contents">{contents?contents:'내용'}</div>
            </div>
        );
    }
}

export default ListItem;