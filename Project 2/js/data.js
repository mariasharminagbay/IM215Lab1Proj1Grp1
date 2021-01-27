/* define your array of object literals here */

    var CNcities = ["Calgary","Montreal","Toronto"];
    var UScities = ["Boston","Chicago","New York","Seattle","Washington"];
    var ITcities = ["Florence","Milan","Naples","Rome"];
    var SPcities = ["Almeria","Barcelona","Madrid"];

    var CNphotos = ["images/canada1.jpg","images/canada2.jpg","images/canada3.jpg"];
    var USphotos = ["images/us1.jpg","images/us2.jpg"];
    var ITphotos = ["images/italy1.jpg","images/italy2.jpg","images/italy3.jpg","images/italy4.jpg","images/italy5.jpg","images/italy6.jpg"];
    var SPphotos = ["images/spain1.jpg","images/spain2.jpg"];

    for(i=0; i < 7; i++)
    {
    var countries = [
        new Country("Canada", "North America", CNcities[i], CNphotos[i]),
        new Country("United States", "North America", UScities[i], USphotos[i]),
        new Country("Italy", "Europe", ITcities[i], ITphotos[i]),
        new Country("Spain", "Europe", SPcities[i], SPphotos[i]),
    ];
}