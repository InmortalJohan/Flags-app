import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

function SelectBasic({ region, setRegion }) {
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setRegion(newValue);
    }
  };

  return (
    <Select className='select-menu' placeholder="Filter by region" value={region} onChange={handleChange}>
      <Option value="Any">Select region</Option>
      <Option value="Africa">Africa</Option>
      <Option value="Europe">Europe</Option>
      <Option value="Asia">Asia</Option>
      <Option value="Americas">Americas</Option>
      <Option value="Oceania">Oceania</Option>
    </Select>
  );
}

export default SelectBasic;