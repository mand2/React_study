//총합만 구하는 component 따로 빼기
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(({MarketStore}) => ({total : MarketStore.total}))

@observer
class TotalPrice extends Component {
    render(){
        const {total} = this.props;
        return (
            <div>
                <hr />
                <p>
                    <b>총합 : </b> {total} 원
                </p>
            </div>
        );
    }
}

export default TotalPrice;