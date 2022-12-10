import type { NextApiRequest, NextApiResponse } from "next";
import { Ramen } from '../../../@types/models/Ramen';

export default async (req: NextApiRequest, res: NextApiResponse<Ramen[]>) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // for slow test

  res
    .status(200)
    .json([{ id: 0,shop_name: "柴崎亭" }, { id: 1,shop_name:"八五" }, { id:2, shop_name: "一風堂" },{ id:3, shop_name: "まるたかや" }]);
};