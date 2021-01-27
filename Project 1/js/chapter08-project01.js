/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
var subTotal = 0;
console.log(filenames.length)
for(i=0; i < filenames.length; i++){
   let amount = calculateTotal(quantities[i], prices[i]);
   let qty = quantities[i].toFixed(2);
   let prc = prices[i].toFixed(2);
   outputCartRow(filenames[i],titles[i],qty,prc,amount.toFixed(2));
   subTotal += parseFloat(amount.toFixed(2));
   
}

// for SubTotal
document.getElementById('subTotal').innerHTML = "$ " + subTotal.toFixed(2); 

//compute for Tax:
var tax = (subTotal * .10);
document.getElementById('Tax').innerHTML = "$ " + tax.toFixed(2);

//compute for shipping:
var shipping = 0;
if (subTotal > 1000){
   shipping = 40;
}
else{shipping = 0;}

document.getElementById('Shipping').innerHTML = "$ " + shipping.toFixed(2);

//compute for GrandTotal
var TotalAll = 0;
TotalAll = subTotal - tax - shipping;

document.getElementById('grndTotal').innerHTML = "$ " + TotalAll.toFixed(2);

