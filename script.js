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
  },
  {
    item: 'spinach (bunches)',
    price: 0.69,
    quantity: 8
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

var divi=document.createElement('divi');
document.body.appendChild(divi);
var para1=document.createElement('p');
divi.appendChild(para1);
para1.innerText= 'Pounds of apples: '+shoppingList[0].quantity+'. Price per pound: $'+shoppingList[0].price+'.';
var para2=document.createElement('p');
divi.appendChild(para2);
para2.innerText="Pound of pears: "+shoppingList[1].quantity+'. Price per pound: $'+shoppingList[1].price+'.';
var para3=document.createElement('p');
divi.appendChild(para3);
para3.innerText="Gallons of milk: "+shoppingList[2].quantity+'. Price per gallon: $'+shoppingList[2].price+'.';
var para4=document.createElement('p');
divi.appendChild(para4);
para4.innerText="Bunches of spinach: "+shoppingList[3].quantity+'. Price per bunch: $'+shoppingList[3].price+'.';
var para5=document.createElement('p')
divi.appendChild(para5);
para5.innerText="Subtotal: $"+subtotal;
var para6=document.createElement('p');
divi.appendChild(para6);
para6.innerText="Sales Tax(6%): $"+.06*subtotal;
var para7=document.createElement('p');
divi.appendChild(para7);
para7.innerText="Total: $"+1.06*subtotal;
