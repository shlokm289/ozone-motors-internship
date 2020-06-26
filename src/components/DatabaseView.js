import React,{useState} from 'react';
import {Table} from 'reactstrap';
import { db } from '../firebase';

const View = (props) => {
	
	const [colorData,setColorData] = useState([]);
  const [counter,setCounter] = useState(10);
  const [lat,setLat] = useState();
  const [lon,setLon] = useState();

    React.useEffect(()=>{
    	const fetchData = async() => {
    		const colors = await db.collection('data').get();
    		setColorData(colors.docs.map((doc) => doc.data()))
    	}
    	fetchData();
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      if(counter == 0){
        updateData();
        setTimeout(()=> window.location.reload(),1000);
      } 
    },[counter]);

    const updateData = async() => {
      let ref = db.collection('data');
      let snapShot = await ref.get();

      snapShot.forEach(async(document) => {
      var url = 'https://us-central1-ozone-motors-internship.cloudfunctions.net/getData';
      var response = await fetch(url);
      var result = await response.json();
        await ref.doc(document.id).update({
          lat: result.lat,
          lon: result.lon
        })
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
                <td>{color.lat}</td>
                <td>{color.lon}</td>
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