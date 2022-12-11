export type Ramen = {
  id: number;
  shop_name: string;
  image?: string
  };
  
  export const RamenCateory = [
    { name: 'ラーメンの種類' },
    { name: '塩ラーメン' },
    { name: 'あっさり系' },
    { name: 'コッテリ系' },
    { name: '二郎系' },
    { name: '家系' },
]
export const ramens: Ramen[]=
[{ id:0,shop_name: "柴崎亭"},
 { id: 1,shop_name:"八五" }, 
 { id:2, shop_name: "一風堂" },
 { id:3, shop_name: "まるたかや" }]