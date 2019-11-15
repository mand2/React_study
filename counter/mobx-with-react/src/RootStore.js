import CounterStore from './stores/CounterStore';
import MarketStore from './stores/MarketStore';

class RootStore {
    constructor(){
        //constructor 시 this 를 꼭 넣어준다,, 현재루트스토어를 알아야 하기 때문
        this.CounterStore = new CounterStore(this);
        this.MarketStore = new MarketStore(this); 
    }
}

export default RootStore;