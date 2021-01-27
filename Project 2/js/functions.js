/* add in your functions here */
function outputCoutryBox(name, continent, cities,photos) {
        document.write('<div class="item"');
        document.write('<h2>'+ name+ '</h2>');
        document.write('<h4>'+ continent +'</h4>');

        outputCities(cities);
        
        outputPhotos(photos);

        document.write('<button>Visit</button>');
        document.write('</div>');
            function outputCities(cities)
            {
                alert(CNcities.length);
                alert(CNcities[0]);
                document.write('<div class="inner-box">');
                document.write('<h3>Cities</h3>');

                if (name == "Canada")
                {
                    for  ( i = 0; i < CNcities.length; i++)
                    {
                        cities = document.write('<li>' +CNcities[i]+ '</li>');
                    }
                }

                if (name == "United States")
                {
                    for  ( i = 0; i < UScities.length; i++)
                    {
                        cities = document.write('<li>' +UScities[i]+ '</li>');
                    }
                }
                if (name == "Italy")
                {
                    for  (i = 0; i < ITcities.length; i++)
                    {
                        cities = document.write('<li>' +ITcities[i]+ '</li>');
                    }
                }
                if (name == "Spain")
                {
                    for  ( i = 0; i < SPcities.length; i++)
                    {
                       cities =  document.write('<li>' +SPcities[i]+ '</li>');
                    }
                }
                document.write('</div>');
            }

            function outputPhotos(photos){
                document.write('<div class="inner-box">');
                document.write('<h3>Popular Photos</h3>');

                if (name == "Canada")
                {
                    for  (i = 0; i < CNphotos.length; i++)
                    {
                      photos =  document.write('<li>' +CNphotos[i]+ '</li>');
                    }
                }

                if (name == "United States")
                {
                    for  ( i = 0; i < USphotos.length; i++)
                    {
                        photos = document.write('<li>' +USphotos[i]+ '</li>');
                    }
                }
                if (name == "Italy")
                {
                    for  (i = 0; i < ITphotos.length; i++)
                    {
                        photos = document.write('<li>' +ITphotos[i]+ '</li>');
                    }
                }
                if (name == "Spain")
                {
                    for  ( i = 0; i < SPphotos.length; i++)
                    {
                        photos =  document.write('<li>' +SPphotos[i]+ '</li>');
                    }
                }
                document.write('</div>');
            }
}


