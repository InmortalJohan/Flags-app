export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="search"
      name="search-form"
      id="search-form"
      className="search-input"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for a Country"
    />
  );
}