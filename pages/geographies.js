import WorldMap from "../components/Geography/WorldMap";
import Head from "next/head";

const Geographies = () => {
  const handleCountryClick = (countryName) => {
    console.log("Clicked on country: ", countryName);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <Head>
        <title>Countries</title>
      </Head>
      <div className="w-2/3 h-2/3">
        <WorldMap onCountryClick={handleCountryClick} />
      </div>
    </div>
  );
};

export default Geographies;
