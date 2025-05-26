import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Country = () => {
  const { id } = useParams(); // id = landets kod, ex: "SWE"
  const [country, setCountry] = useState(null);
  const [neighbors, setNeighbors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      setError(null);

      try {
        // Hämta landet med alpha-kod
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (!res.ok) throw new Error("Landet kunde inte hämtas");
        const data = await res.json();
        const countryData = Array.isArray(data) ? data[0] : data;
        setCountry(countryData);

        // Hämta grannländer med deras namn
        if (countryData.borders && countryData.borders.length > 0) {
          const bordersRes = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(
              ","
            )}`
          );
          const bordersData = await bordersRes.json();
          setNeighbors(bordersData);
        } else {
          setNeighbors([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>Fel: {error}</p>;
  if (!country) return <p>Ingen data</p>;

  return (
    <div className="country-detail">
      <Link to="/" className="back-link">
        ← Tillbaka
      </Link>

      <img src={country.flags?.svg} alt={country.name?.common} width="200" />
      <h1>{country.name.common}</h1>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Huvudstad:</strong> {country.capital?.[0]}
      </p>
      <p>
        <strong>Befolkning:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Språk:</strong>{" "}
        {Object.values(country.languages || {}).join(", ")}
      </p>

      <div>
        <h3>Grannländer:</h3>
        {neighbors.length > 0 ? (
          neighbors.map((neighbor) => (
            <Link to={`/country/${neighbor.cca3}`} key={neighbor.cca3}>
              <button>{neighbor.name.common}</button>
            </Link>
          ))
        ) : (
          <p>Inga grannländer</p>
        )}
      </div>
    </div>
  );
};

export default Country;
