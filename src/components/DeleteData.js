import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const DeleteData = (props) => {
  
  const [serialNo,setSerialNo] = React.useState('');

  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Sr.No</Label>
        <Input type="number"  placeholder="0" />
      </FormGroup>
      <Button>Delete</Button>
    </Form>
    )
}

export default DeleteData;