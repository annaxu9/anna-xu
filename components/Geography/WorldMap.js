import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


export default function WorldMap() {
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleCountryClick = (countryName) => {
        setSelectedCountry(countryName);
    };
  return (
    <div>

    <h1>{selectedCountry}</h1>
    <ComposableMap>
      <Geographies geography="/geography/states.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} 
            onClick={() => {
                handleCountryClick(geo.properties.name)
                console.log(geo.properties.name)
                }
            }
            style={{
              default: {
                fill: "#D6D6DA",
                outline: "none",
              },
              hover: {
                fill: "#F53",
                outline: "none",
              },
              pressed: {
                fill: "#E42",
                outline: "none",
              },
            }}/>
          ))
        }
      </Geographies>
    </ComposableMap>
    </div>
  )
}
