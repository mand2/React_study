// App/index.js 각 컴포넌트를 작성한 후 redering한다
import React from 'react'
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';
import { generatedId } from '../../utils';


class App extends React.Component {
    
    // state선언
    // : UI의 상태를 기록하는 데이터
    // state = {
    //     notes: [],
    //     activeId: null
    // }

    state = {
        notes : [
            {
                id : '_1aaaaaa',
                title : '끄아아ㅏㅏㅏㅏ',
                contents : '배가고프다아ㅏㅏㅏ'
            },
            {
                id : '2bbbbbbb',
                title : 'test2',
                contents : 'contents2'
            },
            {
                id : '3ccccc',
                title : 'test3',
                contents : 'cont33'
            }
            
        ],
        activeId: '3ccccc'
    }

    //이벤트핸들러 메서드
    handleListItemClick = (id) => {
        this.setState({ activeId : id });
    }

    // 편집
    handleEditNote = (type, e) => {
        //새 notes어레이생성 = 현재 notes 배열을 반환
        const notes = [ ...this.state.notes ];

        // 선택된 ListItem의 id 값인 객체를 note로 반환
        const note = notes.find(
            (item) => item.id === this.state.activeId
        )

        note[type] = e.target.value ;

        this.setState({
            notes,
        });
    }
    
    //추가
    handleAddNote = () => {
        const id = generatedId(); //random ID 생성
        this.setState({
            notes : [
                ...this.state.notes,
                {
                    id,
                    title : '제목 넣어주세여',
                    contents : '내용입력해줘요',
                }
            ],
            activeId : id,
        });
    }

    //삭제
    handleDeleteNote = () => {
        //현재 선택한 note를 제외한, 새로운 배열 객체 생성
        const notes = this.state.notes.filter((item) => item.id !== this.state.activeId );

        this.setState({
            notes,
            activeId : notes.length === 0 ? null : notes[0].id,
        });
    }

    render(){
        const{ notes, activeId } = this.state;
        //클릭한 listItem을 찾아서 0번지를 activeNote로 반환.
        const activeNote = notes.filter((item) => item.id === activeId)[0];

        return (
            <div className="app">
                <Header 
                    onAddNote = { this.handleAddNote }
                    onDeleteNote = { this.handleDeleteNote }
                />
                {/* 
                원래는 <div>WELCOME TO ny's</div> 를 썼음
                redering할 땐 
                Header List Note와 같이 
                import할 때의 이름을 가져와서 tag 형식으로 씀
                */}
                <div className="container">
                    <List 
                        notes={notes} 
                        activeId={activeId} 
                        onListItemClick={this.handleListItemClick}
                    />
                    {/*  Note가 1개라도 존재할 때 <Note /> 렌더링.*/}
                    {/* note 속성에 activeNote 전달 */}
                    {
                        notes.length !== 0 && 
                        <Note 
                            note = {activeNote} 
                            onEditNote = { this.handleEditNote }
                        />
                    }
                </div>
            </div>
        );
    }
}

export default App;