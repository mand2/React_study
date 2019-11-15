import React from 'react';
import ShopItem from './ShopItem';

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

const ShopItemList = () => {
  const itemList = items.map(item => <ShopItem {...item} key={item.name} />);
  return <div>{itemList}</div>;
};

export default ShopItemList;