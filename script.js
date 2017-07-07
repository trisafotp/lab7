var shoppingList = [
  {
    item: 'apples (lbs)',
    price: 2.99,
    quantity: 5
  },
  {
    item:'pears (lbs)',
    price: 3.99,
    quantity: 3
  },
  {
    item: 'milk (gallons)',
    price: 1.99,
    quantity: 2
  }
  ]

for (i=0; i<shoppingList.length; i++) {
  console.log('Grocery item: ' + shoppingList[i].item + '. Price per unit: ' + shoppingList[i].price + '.');
}

var subtotal = 0;

shoppingList.forEach(function(item){
  subtotal += (item.price*item.quantity);
});

var total = 1.06*subtotal
