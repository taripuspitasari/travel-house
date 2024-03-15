import React, {useState, useEffect, createContext} from "react";

// import data
import {housesData} from "../data";

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map(house => {
      return house.country;
    });

    // remove duplicate
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = housesData.map(house => {
      return house.type;
    });
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // set Loading
    // create a function that checks if the string includes (any)
    const isDefault = str => {
      return str.split(" ").includes("(any)");
    };
    // get first values of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);
    // get second value of price and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price);

      // if values are selected
      if (
        house.country === country &&
        house.type === type &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
    });
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
