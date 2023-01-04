import axios from "axios";
import { useEffect } from "react";

const instnce = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=`,
    headers: {
        // "API-KEY": "98ecdb9364988a9953be656dac71e2db"
    },
    withCredentials: true
})


//   const [weather, setWeather] = useState(0);
//   const [description, setDescription] = useState("");
//   const [wind, setWind] = useState(0);
//   const [humidity, setHumidity] = useState(0);
//   const [location, setLocation] = useState("");

    export async function fetchData(url) { //ToDo make api file for fetching data
      try {
              const cit = `${url}` === 'undefined' ? 'Mogilev' : `${url}`;
              const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cit}&lang=en&appid=98ecdb9364988a9953be656dac71e2db&units=metric`
              );
              const data = res.data;
              return data;
              }catch (err){
console.log(err);
              }
    }


  