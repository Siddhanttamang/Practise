import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { fetchWeather, type WeatherRequest, type WeatherResponse } from '../../services/auth';
interface WeatherProps{
    city:string ;
}
const Weather:React.FC<WeatherProps> = ({city}) => {
    const[error,setError]=useState("err")
    const[weatherData,setWeatherData]=useState<WeatherResponse | null>(null);
    useEffect(()=>{
    const fetchWeatherData=async ()=>{
            try{
                const request: WeatherRequest={city};
                const data= await fetchWeather(request);
                if(data.temperature){
                    setWeatherData(data);
                    setError("");
                }
            }catch(err:any){
                setError(err.message);
            }
        }
        fetchWeatherData();

    },[]);

  return (
    <div className='weather-section'>
        {!error &&
            <span >{weatherData?.temperature +"°C"}</span>
        }
      
    </div>
  )
}

export default Weather
