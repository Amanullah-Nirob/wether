













function chanecountry() {
var input=document.getElementById(`input`)
var inputvalue=input.value
input.value=``
var key=`5544e22f5348ddc021d94699bc791a30`


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=${key}`)
.then(response=>response.json())
.then(data=>oma(data))
}

function oma(data) {
  console.log(data)
 var allcontant=document.getElementById(`all-contant`)
var mains=Math.round(data.main.temp-273.15)

 allcontant.innerHTML=`
 <h1>${data.name}</h1>
 <h2>${mains}°c</h2>
 <h2>${data.weather[0].main}</h2>
 
 
 `


}









