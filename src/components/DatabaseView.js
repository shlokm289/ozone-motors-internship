import React,{useState} from 'react';
import {Table} from 'reactstrap';
import { db } from '../firebase';
const View = (props) => {
	
	const [colorData,setColorData] = useState([]);
	const [loading,setLoading] = useState(true);

    React.useEffect(()=>{
    	var list = [];
    	const subscriber = db
    						  .collection('data')
    						  .onSnapshot((querySnap)=>{
    						  	console.log(`Size : ${querySnap.size}`);
    							querySnap.forEach((doc)=>{
    								console.log(doc.id)
    								list.push({
    									...doc.data(),
    									key: doc.id
    								});
    							});  	
    						  console.log(list);
    						  setColorData(list);
    						  setLoading(false);	
    					 })
    	return () => subscriber();
    },[]);

    if(loading){
    	return(
    		<>
    			<p>Loading ..</p>
    		</>
    	)
    }

	return(
  		<>
  		
  		</>
  	)
}

export default View;