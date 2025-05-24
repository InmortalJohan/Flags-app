import { Link } from "react-router-dom";

const Card = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`} className="country-cards">
      <div>
        <img src={country.flags?.svg} alt={country.name?.common} />
        <p><strong>Name:</strong> {country.name?.common}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default Card;