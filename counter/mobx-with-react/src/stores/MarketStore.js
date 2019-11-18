import { observable, action, computed } from 'mobx';

class MarketStore {
    @observable
    selectedItems = [];

    constructor(root){
        this.root = root;
    }

    @action
    put = (name, price) => {

        const { number } = this.root.CounterStore;

        //존재하ㄴㅣ
        const exists = this.selectedItems.find(item => item.name === name);

        if(!exists){
            this.selectedItems.push({
                name,
                price,
                count: number,
            });
            return;
        }
        exists.count += number;
    };

    @action
    take = name => {
        const { number } = this.root.CounterStore;

        const itemToTake = this.selectedItems.find(item => item.name === name);
        // itemToTake.count--;
        
        if(itemToTake.count <= number){
            this.selectedItems.remove(itemToTake);//배열에서 제거처리
            return;
        }
        itemToTake.count -= number;
    };

    @computed
    get total(){
        console.log('총합계산 ,,,');
        return this.selectedItems.reduce((previous, current) => {
            return previous + current.price * current.count;
        }, 0);
    };
}

export default MarketStore;