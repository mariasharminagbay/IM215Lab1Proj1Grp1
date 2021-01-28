// for (j=0; j< countries.length; j++)
//    {
//     var	c	=	countries[j];
    
//                 document.write("<div	class='inner-box'>");
                
//                 console.log(c);
                
//                 outputCoutryBox();
// 				// for	(var	propertyName	in	c)	{
                    
// 				// 				document.write("<strong>");
// 				// 				document.write(propertyName	+	":	");
// 				// 				document.write("</strong>");
// 				// 				document.write(c[propertyName]);	
// 				// 				document.write("<br>");
// 				// }
// 				document.write("</div>");
//    }

   var contcount = 0; 
   contcount = countries.length;
   alert('Continent count:' + contcount);
  

   for(var i = 0; i < countries.length; i++){
		var strContinent = countries[i].continent;
		alert(strContinent);
		for(var x = 0; x < countries[i].country.length; x++) {
			var strCountry = countries[i].country[x].name;
			alert('country name ' + strCountry);

			var arrCities = [];
			for(var y = 0; y < countries[i].country[x].cities.length; y++){
				var strCity = countries[i].country[x].cities[y];
				alert('City name ' + strCity);
				arrCities.push(strCity);
			}
			alert(arrCities.length);
			alert('Cities:' + arrCities[0] + arrCities[1] + arrCities[2]);

			var arrPhotos = [];
			for(var z = 0; z < countries[i].country[x].photos.length; z++){
				var strphoto = countries[i].country[x].photos[z];
				alert('City name ' + strphoto);
				arrPhotos.push(strphoto);
			}
			//outputCountryBox(name, continent, cities,photos)
			outputCountryBox(strCountry,strContinent,arrCities,arrPhotos)
			
		}
   }


   


