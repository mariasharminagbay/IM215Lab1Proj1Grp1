/* define functions here */

function calculateTotal(price, quantity) {
     return price * quantity;
}

function outputCartRow(file, title, quantity, price, total) {
    var amount = calculateTotal(price, quantity);

    document.write('<tr>')
    document.write('<td><img src="../images/' + file + '"></td>');
    document.write('<td>' + title + '</td>');
    document.write('<td>' + quantity + '</td>');
    document.write('<td>$' + price + '</td>');
    document.write('<td>$' + amount + '</td>');
    document.write('</tr>')
}

        
