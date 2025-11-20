import React from 'react';
import { type Vegetable } from '../../services/api';

interface VegetableListProps {
  vegetables: Vegetable[] | null;
}

const VegetableList: React.FC<VegetableListProps> = ({ vegetables }) => {
  return (
    <div className="vegetable-container">
      <h1 className="vegetable-title">Vegetable Prices</h1>

      <table className="vegetable-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity (kg)</th>
            <th>Price (Rs)</th>
          </tr>
        </thead>
        <tbody>
          {vegetables?.map((veg) => (
            <tr key={veg.id}>
              <td>{veg.name}</td>
              <td>1 / Kg</td>
              <td>{veg.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VegetableList;
