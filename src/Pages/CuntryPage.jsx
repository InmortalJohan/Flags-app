import { useEffect,useState } from "react"
import axios from "axios"



const AllCuntrys =()=>{
    const [cuntry,setCuntry] = useState([]);
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState(null);

    useEffect (()=>{
        const fetchCuntrys= async () => {
            try {
                const res= await axios.get('https://restcountries.com/v3.1/all');
                setCuntry(res.data)
            } catch (err) {
                setError('Kunde inte hämta data.')
            } finally {
                setLoading(false)
            }
        }

        fetchCuntrys()
    },[]);

    if(loading) return <p>Laddar länder...</p>;
    if(error) return <p>{error}</p>;

    return(
        <div className="all-flags">
            {cuntry.map((cuntry,index)=>(
                <div className="cuntrys" key={index}>
                <img src={cuntry.flags.svg} alt={'${cuntry.name.common}'}/>
                {cuntry.name.common}
                </div>
            ))}
        </div>
    )
}
export default AllCuntrys