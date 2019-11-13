// List/index.js
import React from 'react'
import './index.css';
import ListItem from '../ListItem';

class List extends React.Component {
    render(){
        // console.log('render NoteList ' + this.props.activeId);
        const {
            notes, 
            activeId,
            onListItemClick
        } = this.props;
        return (
            <div className="list">
                {notes.map( (item) => {
                    const {id, title, contents} = item;
                    return (
                        //반복문을 돌 때에는 key가 필수
                        <ListItem 
                            key = {id}
                            id = {id}
                            active = {id===activeId}
                            title = {title}
                            contents = {contents}
                            onClick = {() => onListItemClick(id)} //메서드 전달
                        />
                    );
                }
                )}
            </div>
        );
    }
}

export default List;