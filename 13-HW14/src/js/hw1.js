'use strict';
export const sum =(...productsCosts) => productsCosts.reduce((sum, cost)=>sum+cost,0)
