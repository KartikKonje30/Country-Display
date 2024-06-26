// import "./styles.css";
// import { useEffect, useState } from "react";
// export default function App() {

//   const [countries, setCountries] = useState([]);
//   const getCountriesData = async () => {
//     try {
//       const data = await fetch("https://restcountries.com/v3.1/all");
//       const res = await data.json();
//       setCountries(res);
//     } catch (error) {
//       console.log("Error fetching data: ", error);
//     }
//   }

//   useEffect(() => {
//     getCountriesData();
//   }, []);


//   const imageStyle = {
//     width: "100px",
//     height: "100px"
//   };

//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   };

//   const cardStyle = {
//     width: "200px",
//     border: "1px solid black",
//     borderRadius: "10px",
//     margin: "10px",
//     padding: "10px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   }

//   return (
//   <div>

//     <div style={containerStyle}>{
//       countries.map((country) => (
//         <div key={country.cca3} style={cardStyle}>
//           <img src={country.flags.png} alt={`flag of ${country.name.common}`} style={imageStyle} />
//           <h2>{country.name.common}</h2>
//         </div>
//       ))
//     }
//     </div>
//     </div>
//   );
// }

import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(term));
    setFilteredCountries(filtered);
    console.log(term);
    console.log(filtered)
  };

    const imageStyle = {
    width: "100px",
    height: "100px"
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-start",
    height: "100vh",
  };

    const cardStyle = {
    width: "200px",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div >
      <input
        type="text"
        placeholder="Search for countries..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "20px" , width: "300px", height: "30px", alignItems: "center", borderRadius: "10px", padding: "10px"}}
      />
      <div style={containerStyle}>
        {filteredCountries.map(country => (
          <div key={country.cca3} className="countryCard" style={cardStyle}>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={imageStyle}/>
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}