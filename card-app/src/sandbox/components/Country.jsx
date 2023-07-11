import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Country() {
  const [country, setCountry] = useState();
  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      console.log(data[50].altSpellings[1]);
      setCountry(data[50].altSpellings[1]);
    } catch (error) {
      console.log(error.message);
    }
  };
  return <div>{country}</div>;
}
