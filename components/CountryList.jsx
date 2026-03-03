import { useState,useEffect } from "react"
// import CountriesData from "../CountriesData"
import CountryCard from "./CountryCard"

export default function CountryList({query}) {
const [CountriesData,setCountriesData] = useState([]);
   useEffect(()=>
  {
     fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
      
      .then((data)=>data.json())
      .then((data) =>{
        setCountriesData(data)
      });
  },[]);


return (
    <>
    <div className="countries-container">
    {
       CountriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country)=>{
        // capital={country.capital[0]}
       return <CountryCard name={country.name.common} key={country.name.common} flag={country.flags.svg} population={country.population} region={country.region} capital={country.name.official}/>
      })
    }
    </div>
    </>
  )
}