/* define functions here */

function calculateTotal(price, quantity) {
    return price * quantity;
}

function outputCartRow(file, title, quantity, price, total) {
    console.log(file);
    document.write('<tr>')
    document.write('<td><img src="../Project 1/images/' + file + '"></td>');
    document.write('<td>' + title + '</td>');
    document.write('<td>' + quantity + '</td>');
    document.write('<td>$' + price + '</td>');
    document.write('<td>$' + total + '</td>');
    document.write('</tr>')    
}

//populate Subtotal, tax, shipping and grandtotal:
//did not include code below at chapter08-project01.js since it reloads again the outputCartRow function on the page loads.
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
      
