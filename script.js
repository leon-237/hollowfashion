 let cartcount = 0;
 let cart = [];
 function addTocart(productName, price) { cartcount++;
 cart.push({ name: productName, price:price });
 
 document.getElementById("cart-count").textContent = '${cartcount}';
 alert('${productName} a été ajouté au panier !');
 }