var buttonone = document.getElementById('oneButton');
var buttontwo = document.getElementById('twoButton');
var buttonthree = document.getElementById('threeButton');
var beforeTaxes = document.getElementById('beforeTax');
var afterTaxes = document.getElementById('afterTax');
var cart = document.getElementById('cart');
var menu = document.getElementById('bars');
var carticon = document.getElementById('carticon');

var onePressed = false;
var twoPressed = false;
var threePressed = false;
var menustatus = false;
var cartstatus = false;

var d = new Date();

var subtotal = 0;
var idnumber = 0;

var cartArray = [];

var shirt1 = {
  name:"Redboi",
  price:29,
  id:0
}
var shirt2 = {
  name:"Symphony of the Night",
  price:19,
  id:0
}
var shirt3 = {
  name:"Iron Pixel",
  price:39,
  id:0
}

function cartdiv(){
  string = '';
  var n = d.getDate();
  var m = (d.getMonth())+1;
  cartArray.forEach(function(item){
    string+=`
    <div class="cartitem">
      <p>${item.name}</p>
      <p>$${item.price}</p>
      <p class="right">${m}/${n}</p>
    </div>
    `;
  })
}
function taxes(calc){
  return((calc * 1.065).toFixed(2));
}

menu.addEventListener('click',function(){
  if(menustatus === false){
    document.getElementById('jsmenu').style.display = 'block';
    menustatus = true;
  }else{
    document.getElementById('jsmenu').style.display = 'none';
    menustatus = false;
  }
})

carticon.addEventListener('click',function(){
  if(cartstatus === false){
    document.getElementById('cart').style.display = 'block';
    cartstatus = true;
  }else{
    document.getElementById('cart').style.display = 'none';
    cartstatus = false;
  }
})

buttonone.addEventListener('click',function(){
  cartArray.push(shirt1);
  cartdiv();
  cart.innerHTML = string;
  idnumber ++;
  shirt1.id = idnumber;
  beforeTaxes.innerHTML = (subtotal += shirt1.price);
  afterTaxes.innerHTML = taxes(subtotal);
  console.log(shirt1.id);
})

buttontwo.addEventListener('click',function(){
  cartArray.push(shirt2);
  cartdiv();
  cart.innerHTML = string;
  idnumber ++;
  shirt2.id = idnumber;
  beforeTaxes.innerHTML = (subtotal += shirt2.price);
  afterTaxes.innerHTML = taxes(subtotal);
  console.log(shirt2.id);
})

buttonthree.addEventListener('click',function(){
  cartArray.push(shirt3);
  cartdiv();
  cart.innerHTML = string;
  idnumber ++;
  shirt3.id = idnumber;
  beforeTaxes.innerHTML = (subtotal += shirt3.price);
  afterTaxes.innerHTML = taxes(subtotal);
  console.log(shirt3.id);
})
