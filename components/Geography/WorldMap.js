import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export default function WorldMap({
  geographyUrl,
  selectedCountry,
  onSelectCountry,
}) {
  return (
    <ComposableMap style={{ width: "100%", height: "100%" }}>
      <Geographies geography={geographyUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const name = geo.properties?.name; // depends on your geo file
            const isSelected = name && name === selectedCountry;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => name && onSelectCountry(name)}
                style={{
                  default: {
                    fill: isSelected ? "#111827" : "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: isSelected ? "#111827" : "#F59E0B",
                    outline: "none",
                    cursor: "pointer",
                  },
                  pressed: {
                    fill: "#111827",
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
