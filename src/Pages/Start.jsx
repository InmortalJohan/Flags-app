import Card from '../components/Card'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

 function SelectBasic() {
  const handleChange = (event, newValue) => {
  };
  return (
    <Select defaultValue="null" onChange={handleChange}>
      <Option value="africa">Africa</Option>
      <Option value="europe">Europe</Option>
      <Option value="asia">Asia</Option>
      <Option value="america">America</Option>
    </Select>
  );
}
export default function Start()  {
    return(
        <div className="start">
            <div className="search-select">
                <input className="searchBar" type="text" />
                <SelectBasic/>
            </div>
            <div className="cardsContainer">
            {<Card/>}
            </div>
        </div>
    )
    
}

