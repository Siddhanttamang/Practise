import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../types/route';
type options={
    replace?:boolean;
    state?:unknown;
}
const TypeNavigate = () => {
    const navigate= useNavigate();
  return (route:AppRoutes,option:options)=>{
    navigate(route,option);
  }
}

export default TypeNavigate
