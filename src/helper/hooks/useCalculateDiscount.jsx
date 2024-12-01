import React from 'react';

const useCalculateDiscount = (originalPrice,discountPercentense)=>{
    const discountAmmount = (originalPrice*discountPercentense)/100;
    const netPrice = originalPrice-discountAmmount;
    return netPrice
}

export default useCalculateDiscount