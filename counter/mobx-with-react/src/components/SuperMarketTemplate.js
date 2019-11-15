//components의 UI 구현
/** 템플릿 형태의 컴포넌트
 * @items :: 왼쪽, 상품 
 * @basket :: 오른쪽, 장바구니
 */

import React from 'react';
import './SuperMarketTemplate.css';

const SuperMarketTemplate = ({ items, basket, total }) => {
    return (
      <div className="SuperMarketTemplate">
        <div className="items-wrapper">
          <h2>상품</h2>
          {items}
        </div>
        <div className="basket-wrapper">
          <h2>장바구니</h2>
          {basket}
          {total}
        </div>
      </div>
    );
};
  
export default SuperMarketTemplate;