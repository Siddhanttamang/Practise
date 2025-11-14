import React from 'react'
import { VegetableResponse } from '../../services/auth'
interface Vegetables{
    vegetables:VegetableResponse[] |null
}
const VegetableList:React.FC<Vegetables> = ({vegetables}) => {
    console.log(vegetables);
  return (
    <div>
        <div style={{ padding: "20px" }}>
      <h1>Vegetable Prices</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>Quantity (kg)</th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>Price (Rs)</th>
          </tr>
        </thead>
        <tbody>
          {vegetables &&(vegetables.map((veg) => (
            <tr key={veg.id}>
              <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{veg.name}</td>
              <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{veg.price}</td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default VegetableList
