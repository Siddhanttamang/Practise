import React, { useEffect, useState } from "react";
import { FetchVegetables, VegetableResponse } from "../services/auth";
import VegetableList from "../components/Vegetables/VegetableList";


const Vegetables: React.FC = () => {
  const [vegetables, setVegetables] = useState<VegetableResponse[] |null>(null);
  const [error,setError]=useState<string>("");

  useEffect(() => {
    const fetchVegetableData=async ()=>{
              try{
                  const data= await FetchVegetables();
                  if(data){
                      setVegetables(data);
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
