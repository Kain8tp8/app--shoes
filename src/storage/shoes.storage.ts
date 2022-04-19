import { nanoid } from "nanoid";
import Shois from "../model/shoes.model";

const shoesAll: Shois[] = [
  { id: nanoid(), colore: "bleck", brend: "Darital", size: "35", moterial: "chit", name: "butsiy", price: "$5000" },
  { id: nanoid(), colore: "bleck", brend: "Darital", size: "35", moterial: "chit", name: "butsiy", price: "$5000" },
  { id: nanoid(), colore: "bleck", brend: "Darital", size: "35", moterial: "chit", name: "butsiy", price: "$5000" },
  { id: nanoid(), colore: "bleck", brend: "Darital", size: "35", moterial: "chit", name: "butsiy", price: "$5000" },
  { id: nanoid(), colore: "bleck", brend: "Darital", size: "35", moterial: "chit", name: "butsiy", price: "$5000" },
  { id: nanoid(), colore: "bleck", brend: "Darital", size: "35", moterial: "chit", name: "butsiy", price: "$5000" },
  { id: nanoid(), colore: "bleck", brend: "Darital", size: "35", moterial: "chit", name: "butsiy", price: "$5000" },
  { id: nanoid(), colore: "bleck", brend: "Darital", size: "35", moterial: "chit", name: "butsiy", price: "$5000" },
];

function allShoes() {
  return shoesAll;
}

function findByBrend(brand: string) {
  return shoesAll.filter((shoes) => shoes.brend === brand);
}

function addShoes(user: Shois) {
  shoesAll.push(user);
}

function remove(id: string) {
  let i = shoesAll.findIndex((user) => user.id === id);
  shoesAll.splice
  
  
  
    (i, 1);
}

export default {
  addShoes,
  allShoes,
  findByBrend,
  remove,
};
