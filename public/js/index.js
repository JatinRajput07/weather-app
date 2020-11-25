const weatherApi = {
    key:'c73670246d382cfc156d798f25a2b4eb',
    baseUrl:'http://api.openweathermap.org/data/2.5/weather'
  }


const submitBtn = document.getElementById('submitBtn')
const city = document.getElementById('cityName')

submitBtn.addEventListener('click',(el)=>{
    el.preventDefault();
    getWeatherReport();
    getCurrentDay();
});


const getWeatherReport = () =>{
    const cityName = city.value;
    fetch(`${weatherApi.baseUrl}?q=${cityName}&appid=${weatherApi.key}&units=metric`)
    .then(weather => weather.json())
    .then(showWeatherReport)
};

const showWeatherReport = (weather) =>{
        try {
            document.getElementById('temp').innerHTML = `${Math.round(weather.main.temp)} &deg;C`;
            document.getElementById('city_name').innerHTML =` ${weather.name},${weather.sys.country}`;

            // weather condition
            const tempMood = weather.weather[0].main

            if(tempMood == 'Clear'){
                document.getElementById('temp_status').innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
            }else if(tempMood == 'Clouds'){
                document.getElementById('temp_status').innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            }else if(tempMood == 'Haze'){
                document.getElementById('temp_status').innerHTML = "<i class='fas cloud-sun' style='color:#a4b0be'></i>";
            }else if(tempMood == 'Smoke'){
                document.getElementById('temp_status').innerHTML = "<i class='fas fa-smog' style='color:#a4b0be'></i>";
            }else if(tempMood == 'Rain'){
                document.getElementById('temp_status').innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
            }else {
                document.getElementById('temp_status').innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
            }
        } catch {
            city_name.innerText =  'Location Not Found';
        }
};




//get day and date
const getCurrentDay = ()=>{
    const weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const currentTime = new Date();
    const days = weekDay[currentTime.getDay()];
    const date = currentTime.getDate();
    const month = Months[currentTime.getMonth()]

    document.getElementById('day').innerHTML = days;
    document.getElementById('today_date').innerHTML = `${date},${month}`;

}























// const submitBtn = document.getElementById('submitBtn');
// const city = document.getElementById('cityName');
// const today = document.getElementById('day');
// const date = document.getElementById('today_date');
// const temp =  document.getElementById('temp');
// const tempStatus =  document.getElementById('temp_status');

// const getinfo = async (el)=>{
//     el.preventDefault();
//     const cityVel = city.value;

//     if(cityVel === ''){
//         city_name.innerText = 'plz write the city name before search';
//     }else{
//         try {
//             const url  = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityVel}&appid=c73670246d382cfc156d798f25a2b4eb&units=metric`)
//             .then(weather => weather.json());
//             console.log(url);

//             // today.innerText = getDay(day)
//             date.innerText = Date()
//             city_name.innerText = `${url.name},${url.sys.country}`
//             temp.innerText = `${Math.round(url.main.temp)} &degC`;
//             const tempMood = url.weather[0].main

//             if(tempMood == 'Clear'){
//                 temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
//             }else if(tempMood == 'Clouds'){
//                 temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
//             }else if(tempMood == 'Rain'){
//                 temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
//             }else {
//                 temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
//             }
            
//         } catch{
//             city_name.innerHTML = `plz enter the city name properly`;
//         }
//     }
// }

// submitBtn.addEventListener('click',getinfo)

// const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']