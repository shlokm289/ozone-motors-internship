import React,{useState} from 'react';
import {Table} from 'reactstrap';
import { db } from '../firebase';

const View = (props) => {
	
	const [colorData,setColorData] = useState([]);
  const [counter,setCounter] = useState(10);
  const [lat,setLat] = useState();
  const [lon,setLon] = useState();

    React.useEffect(()=>{
      getData();
      setInterval(()=> getData(),10000);
    	const fetchData = async() => {
    		const colors = await db.collection('data').get();
    		setColorData(colors.docs.map((doc) => doc.data()))
    	}
    	fetchData();
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      if(counter == 0){
        window .location.reload();
      }
    },[counter]);

    const getData = () => {
      var url = 'https://us-central1-ozone-motors-internship.cloudfunctions.net/getData';
      fetch(url).then(response => response.json())
        .then(result => {
            setLat(result.lat);
            setLon(result.lon);
        })
    }

	return(
    <> 
  		<Table>
  			<thead>
  				<tr>
  					<th>Sr.No</th>
  					<th>Marker</th>
  					<th>Latitude</th>
  					<th>Longitude</th>
  				</tr>
  			</thead>
  			<tbody>
  			  {
  				  colorData.map(color => (
              <tr>
                <th scope="row">{color.sr}</th>
                <td>{color.color}</td>
                <td>{lat}</td>
                <td>{lon}</td>
              </tr>
  				  ))
  			  }     
        </tbody>
  		</Table>
      <h2>Page refreshing in : {counter}</h2>
    </>
  	)
}

export default View;