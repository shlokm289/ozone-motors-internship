import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { db } from '../firebase';

const AddData = (props) => {
  
  const [serialNo,setSerialNo] = React.useState();
  const [colorData,setColorData] = React.useState('');

  const addData = (event) => {
    event.preventDefault();
    db.collection('data').doc(serialNo).set({
      color: colorData,
      sr: serialNo
    }).
    then(()=>{
      setColorData('');  
      setSerialNo('');
    })
  }

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