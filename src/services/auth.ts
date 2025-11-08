export interface User{
    id:number;
    email:string;
    name:string;
    role:string;
}
export interface LoginRequest{
    email:string;
    password:string;
}
export interface LoginResponse{
    access_token:string;
    user?:User;
}
export interface WeatherRequest{
    city:string;
}
export interface WeatherResponse{
    city:string;
    temperature:number;

}
export const loginUser = async(payload:LoginRequest):Promise<LoginResponse>=>{
    const response= await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    })
        if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
    }

    const data: LoginResponse = await response.json();
    return data;
}
export const fetchWeather= async(weatherRequest:WeatherRequest):Promise<WeatherResponse>=>{
       
        const response= await fetch(`http://localhost:5000/api/weather?${weatherRequest.city}`)
        if(!response.ok){
            const errorData= await response.json();
            throw new Error(errorData.message || "Failed to fetch weather")  
          }
        const data: WeatherResponse =await response.json();
        return data;
    

}