for (j=0; j< countries.length; j++)
   {
    var	c	=	countries[j];
    
                document.write("<div	class='inner-box'>");
                
                console.log(c);
                
                outputCoutryBox();
				// for	(var	propertyName	in	c)	{
                    
				// 				document.write("<strong>");
				// 				document.write(propertyName	+	":	");
				// 				document.write("</strong>");
				// 				document.write(c[propertyName]);	
				// 				document.write("<br>");
				// }
				document.write("</div>");
   }