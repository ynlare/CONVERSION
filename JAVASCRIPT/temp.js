var celsius= document.getElementById("celsius") 

var fahrenheit= document.getElementById("fahrenheit") 

var result= document.querySelector("div.result") 

if(celsius.Value){

    fahrenheit.Value=celsius.Value*9/5+32;

    result.innerHTML=celsius.Value+ "°C = " + fahrenheit.Value+ "°F"}






}