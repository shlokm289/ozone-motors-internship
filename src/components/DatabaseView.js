import React,{useState} from 'react';
import {Table} from 'reactstrap';
import { db } from '../firebase';
const View = (props) => {
	
	const [colorData,setColorData] = useState([]);

    React.useEffect(()=>{
    	const fetchData = async() => {
    		const colors = await db.collection('data').get();
    		setColorData(colors.docs.map((doc) => doc.data()))
    	}
    	fetchData();
    },[]);

    const PageReload = (props) => {

        window.setInterval(()=>{
          window .location.reload();
        },10000);

        return(
          <>
          </>
        )
    }

	return(
    <>
      <PageReload /> 
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
                <td>{(Math.random() * 100).toPrecision(5)}</td>
                <td>{(Math.random() * 100).toPrecision(5)}</td>
              </tr>
  				  ))
  			  }     
        </tbody>
  		</Table>
    </>
  	)
}

export default View;