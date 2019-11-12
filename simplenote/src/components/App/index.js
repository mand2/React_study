// App/index.js 각 컴포넌트를 작성한 후 redering한다
import React from 'react'
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';


class App extends React.Component {
    
    // state선언
    // : UI의 상태를 기록하는 데이터
    state = {
        notes: [],
        activeId: null
    }


    render(){
        return (
            <div>
                <Header />
                {/* 
                원래는 <div>WELCOME TO ny's</div> 를 썼음
                redering할 땐 
                Header List Note와 같이 
                import할 때의 이름을 가져와서 tag 형식으로 씀
                */}
                <div className="container">
                    <List />
                    <Note />
                </div>
            </div>
        );
    }
}

export default App;