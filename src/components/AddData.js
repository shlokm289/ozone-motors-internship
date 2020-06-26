import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { db } from '../firebase';

const AddData = (props) => {
  
  const [serialNo,setSerialNo] = React.useState();
  const [colorData,setColorData] = React.useState('');
  const [lat,setLat] = React.useState();
  const [lon,setLon] = React.useState();


  const addData = (event) => {
    event.preventDefault();
    db.collection('data').doc(serialNo).set({
      color: colorData,
      sr: serialNo,
      lat: lat,
      lon: lon
    }).
    then(()=>{
      setColorData('');  
      setSerialNo('');
    })
  }

  //get lat & lon data from and API
  React.useEffect(()=>{
      var url = 'https://us-central1-ozone-motors-internship.cloudfunctions.net/getData';
      fetch(url).then(response => response.json())
        .then(result => {
            setLat(result.lat);
            setLon(result.lon);
        })
  },[]);

  return (
    <Form onSubmit={addData}>
      <FormGroup>
        <Label for="srNo">Sr.No</Label>
        <Input type="number" placeholder="0" value={serialNo} onChange={(event)=> setSerialNo(event.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="Add">Add Data</Label>
        <Input type="text" placeholder="Color" value={colorData} onChange={(event)=> setColorData(event.target.value)}/>
      </FormGroup>
      <Button>Add</Button>
    </Form>
    )
}

export default AddData;