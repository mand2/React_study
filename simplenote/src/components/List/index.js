// List/index.js
import React from 'react'
import './index.css';
import ListItem from '../ListItem';

class List extends React.Component {
    render(){
        const {notes, activeId} = this.props;
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
                            />
                        );
                    }
                )}
            </div>
        );
    }
}

export default List;