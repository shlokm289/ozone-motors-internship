import React,{useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { db } from '../firebase';

const AddData = (props) => {
  
  const [serialNo,setSerialNo] = React.useState('');
  const [colorData,setColorData] = React.useState('');
  const [latitude,setLatitude] = React.useState('');
  const [longitude,setLongitude] = React.useState('');

  const addData = (event) => {
    event.preventDefault();
    db.collection('data').doc(serialNo).set({
      color: colorData,
      lat: latitude,
      lon: longitude
    }).
    then(()=>{
      setColorData('');  
      setSerialNo('');
    })
  }

  //fetch latitude and longitude data
  useEffect(()=>{
    fetch('https://us-central1-vehicletracker360.cloudfunctions.net/sample',{
      method:'GET',
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    }).then((response)=> response.json())
      .then((result)=> {
        setLatitude(result.lat);
        setLongitude(result.lon);
      }).then(()=>{
        console.log(latitude,longitude);
      })
  });

  return (
    <Form onSubmit={addData}>
      <FormGroup>
        <Label for="srNo">Sr.No</Label>
        <Input type="number" placeholder="0" value={serialNo} onChange={(event)=> setSerialNo(event.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="update">Update Data</Label>
        <Input type="text" placeholder="Color" value={colorData} onChange={(event)=> setColorData(event.target.value)}/>
      </FormGroup>
      <Button>Add</Button>
    </Form>
    )
}

export default AddData;