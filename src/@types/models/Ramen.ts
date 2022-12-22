export type Ramen = {
  id: number;
  shop_name: string;
  image: string
  };
  export const RamenCateory = [
    { name: 'ラーメンの種類' },
    { name: '塩ラーメン' },
    { name: 'あっさり系' },
    { name: 'コッテリ系' },
    { name: '二郎系' },
    { name: '家系' },
  ];
  export const ramens: Ramen[]=
  [{ id:0,shop_name: "柴崎亭", image:"/ramens/0.jpeg"},
   { id: 1,shop_name:"八五" ,image:"/ramens/1.jpeg"}, 
   { id:2, shop_name: "一風堂", image:"/ramens/2.jpeg" },
   { id:3, shop_name: "まるたかや",image:"/ramens/3.jpeg" },
   { id:4, shop_name: "はやしだ",image:"/ramens/4.jpeg" },
  ];