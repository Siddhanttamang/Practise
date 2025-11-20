import React, { useEffect, useState } from "react";
import { fetchVegetables, type VegetableResponse } from "../services/api";
import VegetableList from "../components/Vegetables/VegetableList";
import { type Vegetable } from "../services/api";
import '../styles/vegetable.css'

const Vegetables: React.FC = () => {
  const [vegetables, setVegetables] = useState<Vegetable[] |null>(null);
  const [error,setError]=useState<string>("");

  useEffect(() => {
    const fetchVegetableData=async ()=>{
              try{
                  const res= await fetchVegetables();
                  if(res){
                      setVegetables(res.data);
                      setError("");
                  }
              }catch(err:any){
                  setError(err.message);
              }
          }
          fetchVegetableData();
  
      },[]);

  return (
    <>
    <VegetableList vegetables={vegetables}/>
    </>
  );
};

export default Vegetables;
