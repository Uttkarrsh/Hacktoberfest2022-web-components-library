var search=document.getElementById('search');


search.addEventListener("click",()=>{
  var find=document.getElementById('find').value;
  console.log(find);

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${find}&units=metric&appid=03b2d3015ebcba59c0eea874c85ca560`;
fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    document.getElementById('city').innerHTML=data.name;
    document.getElementById('temp').innerHTML=data.main.temp+" \u00B0C";
    document.getElementById('min').innerHTML="Min "+data.main.temp_min+" \u00B0C";
    document.getElementById('max').innerHTML="Max "+data.main.temp_max+" \u00B0C";
    document.getElementById('humidity').innerHTML=data.main.humidity;
  
})
})
