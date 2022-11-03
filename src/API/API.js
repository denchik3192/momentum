import axios from "axios";

const instnce = axios.create({
    baseURL: ``,
    headers: {
        "API-KEY": ""
    },
    withCredentials: true
})

export const weatherAPI = {
    async getWeather(cit = 'Mogilev') {
        const response = await instnce.get(`https://api.openweathermap.org/data/2.5/weather/?q=${cit}&lang=en&appid=98ecdb9364988a9953be656dac71e2db&units=metric`);
        console.log(response.data);
        return response.data;
        
    }
}

console.log(weatherAPI.getWeather());

//   const [weather, setWeather] = useState(0);
//   const [description, setDescription] = useState("");
//   const [wind, setWind] = useState(0);
//   const [humidity, setHumidity] = useState(0);
//   const [location, setLocation] = useState("");

//   useEffect(() => {
//     async function fetchData() { //ToDo make api file for fetching data
//       try {
//         const cit = "Mogilev";
//         const res = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=${cit}&lang=en&appid=98ecdb9364988a9953be656dac71e2db&units=metric`
//         );
//         const data = res.data;
//         const temperature = `${Math.floor(data.main.temp)}°`;
//         const description = data.weather[0].description;
//         const humidity = `Humidity: ${data.main.humidity}%`;
//         const wind = data.wind.speed;
//         const location = data.name;
//         setWeather(temperature);
//         setDescription(description);
//         setHumidity(humidity);
//         setWind(wind);
//         setLocation(location);
//       } catch (err) {
//         setDescription(`Error! city not found for'!`);
//         setWeather(0);
//         setHumidity(0);
//         setWind(0);
//       }
//     }
//     fetchData();
//   }, []);
  