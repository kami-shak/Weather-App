
const inp = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector(".output");
const body = document.querySelector("body");
// selecting tags
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const p6 = document.querySelector(".p6");

function myfun(res) {
     if (res == 'Overcast' || res == 'scattered clouds' || res == 'broken clouds'||res =='Partly cloudy' ||res == 'Patchy rain possible') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1562155955-1cb2d73488d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGNsb3VkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    else if(res=='Mist'){
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1615070293257-a906f36bedde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1pc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    else if (res == 'Sunny' || res=='Clear') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1588765864807-50e134cf0810?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHN1bm55fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'Light rain' || res == 'Moderate or heavy rain shower' || res == 'Heavy rain shower' || res =='Torrential rain shower' || res == 'Moderate rain at times' || res == 'Light rain shower' || res== 'Moderate or heavy rain with thunder') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1438449805896-28a666819a20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJhdGUlMjBvciUyMGhlYXZ5JTIwcmFpbiUyMHNob3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'haze') {
        body.style.backgroundImage = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1553901753-215db344677a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80')"
    }


}


btn.addEventListener("click", (e) => {
    let cityName = inp.value;

    if (cityName != "") {
        output.style.display = "block";
        // Declaration of Some value
        let city; let region; let country;let location;
        let description;
        let temp;
        let humidity;
        let time ;
        let wind;
        // fetching data from Api

     let api=`http://api.weatherapi.com/v1/current.json?key=fefae3b8146b47a8a7f180235210709&q=${cityName}&aqi=yes`;
    fetch(api)
     .then((res) => {
         return res.json()
     })
     .then((data) => {
    // Getting Data Values
    console.log(data);
    
    city=data.location.name;
    region=data.location.region;
    country=data.location.country;
    description = data.current.condition.text;
    temp = data.current.temp_c;
    humidity = data.current.humidity;
    time=data.location.localtime;
    wind=data.current.wind_kph;


    // function call

    myfun(description);

    temp = temp + "°C";



    humidity = "Humidity: " + humidity + "%"; 
    location = city + " ," +region + " , " + country;
    wind="Wind: "+wind+"Km/h";


    // Appending Data
    p1.innerText = location;
    p2.innerText = time;
    p3.innerText = temp;
    p4.innerText = wind;
    p5.innerText = humidity;
    p6.innerText = description;


})
.catch((err) => {
    alert(err);
});



// Setting attribute For designing Purpose
p1.setAttribute("class", "p1");
p2.setAttribute("class", "p1");
p3.setAttribute("class", "p1");
p6.setAttribute("class", "p1");
p3.setAttribute("id", "newOne");



// clearing input

inp.value = "";

}


});