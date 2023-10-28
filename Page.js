// ask for visitor's name//
let visitorname = prompt("Hi! What's your name?");
//get the name
let myButton = document.querySelector("#myButton");
let Spring = document.querySelector("#Spring");
let Summer = document.querySelector("#Summer");
let Autumn = document.querySelector("#Autumn");
let Winter = document.querySelector("#Winter");

myButton.addEventListener("click", myClick);
Spring.addEventListener("click", SpringClick);
Summer.addEventListener("click", SummerClick);
Autumn.addEventListener("click", AutumnClick); 
Winter.addEventListener("click", WinterClick);

function myClick(){
    alert("Hi! "+ visitorname + ", Welcome to myPage!");
    //ask for weather and show photo"
       const Weather = prompt("weather now");
       let myWeather = Weather.toLowerCase();
       //alert(myWeather);
       let myImage = document.querySelector(".weatherImage");
       
         if (myWeather == "sunny"){
         myImage.src = "/visual code/lesson1/Weather app/Sunny.jpeg";
         }
         else if (myWeather == "rainy" || myWeather == "raining" || myWeather == "rain"){
         myImage.src = "/visual code/lesson1/Weather app/Rain.jpeg";
        }
         else if (myWeather == "cloud" || myWeather == "cloudy"){
         myImage.src = "/visual code/lesson1/Weather app/Cloudy.jpeg";
         }
         else if (myWeather == "snow" || myWeather == "snowy"){
         myImage.src = "/visual code/lesson1/Weather app/Snowy.jpeg";
         }
         else if (myWeather == "thunder" || myWeather == "lightning"){
         myImage.src = "/visual code/lesson1/Weather app/linghtning.jpeg";
         }
         else if (myWeather == "thunder" || myWeather == "windy"){
         myImage.src = "/visual code/lesson1/Weather app/windy.jpeg";
         }
         else {
            myImage.src = "/visual code/lesson1/Weather app/Error.jpeg";
            alert("Sorry, maybe try another weather?")
         }
        
        }

    
     function SpringClick(){
     let theImage = document.querySelector(".seasonImage");
     theImage.src = "/visual code/lesson1/Weather app/Spring.jpeg";
     }    
    
     function SummerClick(){
    let theImage = document.querySelector(".seasonImage");
    theImage.src = "/visual code/lesson1/Weather app/Summer.jpeg";
    }    
       
     function AutumnClick(){
     let theImage = document.querySelector(".seasonImage");
     theImage.src = "/visual code/lesson1/Weather app/Autumn.jpeg";
    }    

    function WinterClick(){
    let theImage = document.querySelector(".seasonImage");
    theImage.src = "/visual code/lesson1/Weather app/Winter.jpeg";
    }    
              
           
           



