import { Product } from "@prisma/client";
import { atom } from "jotai";

const sidebaratom = atom(false);

const ordersAtom = atom<{
  products: (Product & {
    quantity: number;
  })[];
}>({
  products: [],
});

export { sidebaratom, ordersAtom };
