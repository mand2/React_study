import React from 'react';
import ShopItem from './ShopItem';
import { inject, observer } from 'mobx-react'; // 불러오기

//SuperMarket의 items에 해당 + ShopItem 리스트를 보여주는 컴포넌트
const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
];

/** 함수형 컴포넌트에 inject 와 observer 를 적용
 * ShopItem에 onPut 함수 추가
 */

const ShopItemList = ({ onPut }) => {
  const itemList = items.map(item => (
    <ShopItem {...item} key={item.name} onPut = {onPut}/>
  ));
  return <div>{itemList}</div>;
};

// **** inject, observer 적용
export default inject(({ MarketStore }) => ({
  onPut: MarketStore.put,
}))(observer(ShopItemList));