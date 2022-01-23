// create a function getMenu
// create another function to select item from menu selectItem
// create a function pay
// create a combine function makeAndOrder

function getMenu() {
  const breakfast = ["Scramble eggs", "Pancakes", "Porridge"];
  const lunch = ["Carbonara", "Beef stew", "Feijoada"];
  const dinner = ["Risotto", "Beef Burguer", "Pad Thai"];
  return [breakfast, lunch, dinner];
}

const menu = getMenu();

console.log(`${menu[0][0]}, ${menu[2][2]}`);
