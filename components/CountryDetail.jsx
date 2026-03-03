import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export default function CountryDetail() {
  const name = new URLSearchParams(window.location.search).get("name").toLowerCase();
  const [isDark] = useContext(ThemeContext)
  useEffect(()=>
  {
    // region/${filterByRegion.value}
    fetch(`https://restcountries.com/v3.1/all?fields=name,flags`)
    .then((res) => res.json())
    .then((data) => data.map((country)=>
    {
      // console.log(country.name.common.toLowerCase());
    }));
  },[]);
  return (
    
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src="image" alt="image alt" />
          <div className="details-text-container">
            <h1>Iceland</h1>
            <div className="details-text">
              <p><b>Native Name: </b><span className="native-name"></span></p>
              <p><b>Population: </b><span className="population"></span></p>
              <p><b>Region: </b><span className="region"></span></p>
              <p><b>Sub Region: </b><span className="sub-region"></span></p>
              <p><b>Capital: </b><span className="capital"></span></p>
              <p>
                <b>Top Level Domain: </b><span className="top-level-domain"></span>
              </p>
              <p><b>Currencies: </b><span className="currencies"></span></p>
              <p><b>Languages: </b><span className="languages"></span></p>
            </div>
            <div className="border-countries"><b>Border Countries: </b>&nbsp;</div>
          </div>
        </div>
      </div>
    </main>
  )
}
