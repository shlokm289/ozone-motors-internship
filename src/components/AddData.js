import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddData = (props) => {
  
  const [serialNo,setSerialNo] = React.useState('');
  const [colorData,setColorData] = React.useState('');

  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Sr.No</Label>
        <Input type="number"  placeholder="0" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Update Data</Label>
        <Input type="text" placeholder="Color" />
      </FormGroup>
      <Button>Update</Button>
    </Form>
    )
}

export default AddData;