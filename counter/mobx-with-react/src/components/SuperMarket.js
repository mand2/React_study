import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

/** SuperMarketTemplate 의 내부 component
 *  ShopItemList & Basket 반환 ? items basketlist아닌가,, 뭐지 ㅋ
 */

const SuperMarket = () => {
    return (
      <SuperMarketTemplate 
        items={<ShopItemList  />} 
        basket={<BasketItemList />}
        total = { <TotalPrice /> } 
      />
    );
  };
  
  export default SuperMarket;