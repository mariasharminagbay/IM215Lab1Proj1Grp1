/* define functions here */

function calculateTotal(price, quantity) {
    return price * quantity;
}

function outputCartRow(file, title, quantity, price, total) {
    // var file = filenames;
    console.log(file);
    document.write('<tr>')
    document.write('<td><img src="../Project 1/images/' + file + '"></td>');
    document.write('<td>' + title + '</td>');
    document.write('<td>' + quantity + '</td>');
    document.write('<td>$' + price + '</td>');
    document.write('<td>$' + total + '</td>');
    document.write('</tr>')
    
}

        
