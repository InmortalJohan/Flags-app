import Card from '../components/Card'
export default function Start()  {
    return(
        <div className="start">
            <div className="search-select">
                <input className="searchBar" type="text" />
                <select name="selectRegion" id="">Choose a Region</select>
            </div>
            <div className="cardsContainer">
                <div>{<Card/>} </div>
                <div>{<Card/>} </div>
                <div>{<Card/>} </div>
                <div>{<Card/>} </div>
                <div>{<Card/>} </div>
                <div>{<Card/>} </div>
                <div>{<Card/>} </div>
                <div>{<Card/>} </div>
            </div>
        </div>
    )
    
}

