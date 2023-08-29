import React, { useState } from 'react';
const carList = ['Mec', 'lexur', 'BMW'];
const colorList = ['red', 'black', 'yellow'];
function  Car(props) {

    const [selectedCar, setSelectedCar] = useState({
        car: carList[0],
        color: colorList[0]
      });
    
      const handleCarChange = (event) => {
        const selectedCarValue = event.target.value;
        setSelectedCar(previousState => {
          return { ...previousState, car: selectedCarValue };
        });
      };
    
      const handleColorChange = (event) => {
        const selectedColorValue = event.target.value;
        setSelectedCar(previousState => {
          return { ...previousState, color: selectedColorValue };
        });
      };
    
      return (
        <div>
          <h1>Selected Car: {selectedCar.car}</h1>
          <h1>Selected Color: {selectedCar.color}</h1>
          <div>
            <label>Car:</label>
            <select value={selectedCar.car} onChange={handleCarChange}>
              {carList.map((car, index) => (
                <option key={index} value={car}>{car}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Color:</label>
            <select value={selectedCar.color} onChange={handleColorChange}>
              {colorList.map((color, index) => (
                <option key={index} value={color}>{color}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }
export default  Car;