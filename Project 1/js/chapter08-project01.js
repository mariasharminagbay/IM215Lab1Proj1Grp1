/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
var subTotal = 0;

for(i=0; i < filenames.length; i++){
   let amount = calculateTotal(quantities[i], prices[i]);
   let qty = quantities[i].toFixed(2);
   let prc = prices[i].toFixed(2);
   outputCartRow(filenames[i],titles[i],qty,prc,amount.toFixed(2));
   subTotal += parseFloat(amount.toFixed(2));
}
