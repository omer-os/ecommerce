import { Product } from "@prisma/client";
import { atom } from "jotai";

const sidebaratom = atom(false);

const ordersAtom = atom<{
  products: (Product)[] 
}>({
  products: [],
});

export { sidebaratom,ordersAtom };
