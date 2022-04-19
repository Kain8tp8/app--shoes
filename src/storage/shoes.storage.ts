import Shois from "../model/shoes.model";

const shoesAll: Shois[] = [];

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
  shoesAll.slice(i, 1);
}

export default {
  addShoes,
  allShoes,
  remove,
};
