
   for(var i = 0; i < countries.length; i++){
   
		var strContinent = countries[i].continent;
		
		for(var x = 0; x < countries[i].country.length; x++) {
			var strCountry = countries[i].country[x].name;
			
			var arrCities = [];
			for(var y = 0; y < countries[i].country[x].cities.length; y++){
				var strCity = countries[i].country[x].cities[y];
				arrCities.push(strCity);
			}
		
			var arrPhotos = [];
			for(var z = 0; z < countries[i].country[x].photos.length; z++){
				var strphoto = countries[i].country[x].photos[z];
				arrPhotos.push(strphoto);
			}
			
			outputCountryBox(strCountry,strContinent,arrCities,arrPhotos)
			
        }
       
        
   }


   


