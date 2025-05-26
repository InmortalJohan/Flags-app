import { useEffect, useState } from "react";
import FilterByRegion from "../components/DropDown";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";

export default function SearchCountry() {
  const url = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("Any");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {
    return data.filter((item) => {
      const matchesQuery = search_parameters.some((parameter) =>
        item[parameter]?.toString().toLowerCase().includes(query.toLowerCase())
      );
      const matchesRegion =
        region === "Any" || item.region?.toLowerCase() === region.toLowerCase();

      return matchesQuery && matchesRegion;
    });
  }

  const filtered = search(data);

  return (
    <div className="start">
      <div className="search-select">
        <SearchBar query={query} setQuery={setQuery} />
        <FilterByRegion region={region} setRegion={setRegion} />
      </div>

      <div className="cardsContainer">
        {filtered.length > 0 ? (
          filtered.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </div>
    </div>
  );
}
