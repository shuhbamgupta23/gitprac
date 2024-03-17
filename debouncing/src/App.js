import { useState } from "react";

const App = () => {

  const [temp, setTemp] = useState(0);

  const handleChange = (e)=>{
    setTemp(parseFloat(e.target.value))
  }
  const tofarh = (val) => {
    return Math.round(((val * 9) / 5 + 32) * 100) / 100;
  };
  const tokelvin = (val) => {
    return Math.round((val + 273.15) * 100) / 100;
  };
  console.log("hell");
  return (
    <div>
      <form>
        <input
          data-testid="input-id"
          name="input"
          type="number"
          value={temp}
          onChange={(e) => handleChange(e)}
        />
        <label for="input">°C</label>
      </form>
      <p data-testid="output">
        {temp}°C is {tofarh(temp)}°F and {tokelvin(temp)}K.
      </p>
    </div>
  );
};

export default App;
