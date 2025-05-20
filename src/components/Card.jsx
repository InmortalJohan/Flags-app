const Card = ({ country }) => {
  return (
    <div className="country-cards">
      <img src={country.flags?.svg} alt={country.name?.common} />
      <p><strong>Name:</strong> {country.name?.common}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
    </div>
  );
};

export default Card;