import React, { useEffect, useState } from "react";
import s from "./weather.module.scss";
import cn from "classnames";
import { WiDaySleet } from "react-icons/wi";
import { changeLocation, fetchWether } from "../../../reduxTK/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined } from "@material-ui/icons";
import { MdMoreHoriz } from "react-icons/md";

const Weather = ({ active, setActive }) => {
  const [lacationEdit, setLocationEdit] = useState(false);

  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);
  const [lacation, setLocation] = useState(weatherData.lacation); //fix 

  useEffect(()=> {
    dispatch(fetchWether());
  }, [dispatch])

  const toggleLocationEdit = () => {
    console.log(lacationEdit);
    setLocationEdit(!lacationEdit)
    dispatch(fetchWether(lacation))
  }

  const handleLocationInput = (e) => {
    setLocation(e.currentTarget.value);
  }
 

  return (
    <div className={active ? cn(s.weatherWrapper, s.active) : s.weatherWrapper} onClick={() => setActive(false)}>
    <div className={active ? cn(s.weather, s.active) : s.weather}  onClick={e => e.stopPropagation()}>
      {/* <input type="text" className={s.city} onChange={(e) => setCity(e.target.value)} value={city}/> */}
      <section className={s.weatherSection}>
        <div className={s.header}>
          <div className={s.loacationWrapper}>
            {lacationEdit ?  <input type="text" className={s.inputLocation} value={lacation} onChange={handleLocationInput} /> : <h3 className={s.location}>{weatherData.location}</h3>}
            
            <EditOutlined className={s.editIcon} onClick={toggleLocationEdit}/>
            <span className={s.weatherDescription}>{weatherData.description}</span>
          </div>
          <div className={s.more}><MdMoreHoriz/></div>
        </div>

        <div className={s.descriptionContainer}>
          <span className={s.temperature}>{weatherData.temperature}</span>
          <div className={s.weatherIcon}>
          <WiDaySleet />
          </div>
          <div className={s.additionalDescr}>
            <div className={s.wind}>Wind: <b>{weatherData.wind}m/s</b></div>
            <div className={s.humidity}>Humidity:  <b>{weatherData.humidity}</b></div>
            <div className={s.humidity}>Pressure:  <b>{weatherData.pressure}</b></div>
          </div>
        </div>
        {/* <div className={s.weatherError}></div> */}
      </section>
      {weatherData.error}
    </div>
    </div>
  );
};

export default Weather;
