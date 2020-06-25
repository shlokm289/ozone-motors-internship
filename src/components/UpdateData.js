import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { db } from '../firebase';

const UpdateData = (props) => {
  
  const [serialNo,setSerialNo] = React.useState('');
  const [colorData,setColorData] = React.useState('');

  const updateData = (event) => {
    event.preventDefault();
    let ref = db.collection('data').doc(serialNo);

    ref.update({
    	color : colorData
    }).then(()=>{
    	setColorData('');
    	setSerialNo('');
    })
    
  }

  return (
    <Form onSubmit={updateData}>
      <FormGroup>
        <Label for="srno">Sr.No</Label>
        <Input type="number"  placeholder="0" value={serialNo} onChange={(e)=> setSerialNo(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="color">Update Data</Label>
        <Input type="text" placeholder="Color" value={colorData} onChange={(e)=> setColorData(e.target.value)}/>
      </FormGroup>
      <Button>Update</Button>
    </Form>
    )
}

export default UpdateData;