import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountrys = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setCountry(res.data);
      } catch (err) {
        setError("Kunde inte hämta data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountrys();
  }, []);

  if (loading) return <p>Laddar länder...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="all-flags">
      {country.map((country, index) => (
        <div className="country-cards" key={index}>
          <img src={country.flags.svg} alt={"${country.name.common}"} />
          <p>Name:{country.name.common}</p>
          <p>Region:{country.region}</p>
          <p>Capital:{country.capital}</p>
          <p>Population:{country.population.toString()}</p>
        </div>
      ))}
    </div>
  );
};
export default Card;
