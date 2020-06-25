import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { db } from '../firebase';
const DeleteData = (props) => {
  
  const [serialNo,setSerialNo] = React.useState('');

  const deleteData = (event) => {
    event.preventDefault();
    db.collection('data').doc(serialNo).delete()
        .then(()=>{
          setSerialNo('');
        });
  }
  return (
    <Form onSubmit={deleteData}>
      <FormGroup>
        <Label for="srno">Sr.No</Label>
        <Input type="number"  placeholder="0" value={serialNo} onChange={(e)=> setSerialNo(e.target.value)}/>
      </FormGroup>
      <Button>Delete</Button>
    </Form>
    )
}

export default DeleteData;