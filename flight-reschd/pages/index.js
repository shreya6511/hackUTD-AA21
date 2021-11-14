import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Button, Panel, Row, Col, Modal, Form, ButtonToolbar, Input} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Table, Column, HeaderCell, Cell } from 'rsuite';
import React, { useEffect, forwardRef } from 'react';

export default function Home() {
  const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [expand, setExpand] = React.useState(true);
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: '',
    textarea: ''
  });
  const defaultFormValue = {
    input: '',
    checkbox: [],
    dateRangePicker: [],
    checkPicker: [],
    textarea: '',
  };    
  const initFormValue = {
    input:
      "React Suite is a set of react component libraries for enterprise system products. Built by HYPERS front-end team and UX team, mainly serving company's big data products. After three major revisions, a large number of components and rich functionality have been accumulated.",
    dateRangePicker: [new Date(), new Date()],
  };
  return (
    <div>
      <Head>
        <title>Flight Rescheduler</title>
        <link rel="icon"></link>
      </Head>

        <Container style={{margin: '4rem'}}>
        <h1 style={{fontWeight: 'lighter', paddingBottom: '1rem'}}>
          Your Trip
        </h1>
        <p style={{fontSize: '1.5rem'}}> <span style={{color: 'green'}}> Depart </span> <span style={{color:'blue'}}>Dallas-Forth Worth to Philadelphia</span></p> 
        <p style={{fontSize: '1.5rem', fontWeight: 'lighter', paddingBottom: '1rem'}}>November 13, 2021</p>
        <p style={{backgroundColor: '#ECECEC', padding: '1.5rem'}}> <span style={{color: 'red', fontWeight: 'bold', fontSize: '1.2rem'}}> STATUS: FLIGHT CANCELED</span> </p>
        <p style={{paddingTop: '1rem', fontSize: '1.5rem'}}> We're sorry your flight has been canceled. Below are the best alternatives: </p>
        <p style={{padding: '1rem'}}></p>
        <Panel header="" shaded style={{padding: '2rem'}}>
          <h6 style={{fontSize: '2rem', paddingBottom: '1rem', paddingTop: '1rem', fontWeight: 'light', paddingBottom:'1.5rem'}}> Estimated Arrival: 9:59 PM </h6>
          <p style={{fontSize: '1.5rem', paddingBottom: '.75rem', color: 'green'}}> Flight 9390 Departing at 2:25 PM</p>
          <p style={{fontSize: '1.35rem', paddingBottom: '.75rem'}}> Arrival at Newark Airport <span style={{color: 'blue'}}> 1 hour 22 minutes </span> from Philidelphia</p>
          
          <Panel header="" shaded style={{padding: '1.2rem', margin: '2rem', paddingBottom: '2.5rem'}}>
            <Col>
            <h3> Options for Arrival to Final Destination </h3>
            <p style={{fontSize: '1.35rem', paddingTop: '2rem'}}> Price of average ride-share to X and surrounding areas is <span style={{fontWeight: 'bold', padding: '1rem', backgroundColor: '#ECECEC'}}>$85.52</span>  </p>
            <Button style={{padding: '1.2rem', marginTop: '2rem', fontSize: '1.2rem', paddingLeft: '2rem', paddingRight: '2rem', backgroundColor: 'black'}} appearance="primary"> View on Uber</Button>
            {/* <Image styles={{alignItems: 'right'}} src="/images/car1.png" alt="uber car"
              width = "150"
              height = "100" /> */}
            </Col>


          </Panel>
          
          <Button  appearance="primary" color="blue" style={{padding:'1rem', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '1.2rem'}}>Select</Button>
        </Panel>

        <Panel header="" shaded style={{padding: '2rem', marginTop: '2rem'}}>
          <h6 style={{fontSize: '2rem', paddingBottom: '1rem', paddingTop: '1rem', fontWeight: 'light', paddingBottom:'1.5rem'}}> Estimated Arrival: 10:34 PM </h6>
          <p style={{fontSize: '1.5rem', paddingBottom: '.75rem', color: 'green'}}> Flight 5917 Departing at 6:34 PM</p>
          <p style={{fontSize: '1.35rem', paddingBottom: '.75rem'}}> Arrival at Baltimore Airport <span style={{color: 'blue'}}> 1 hour 41 minutes </span> from Philidelphia</p>
          
          <Panel header="" shaded style={{padding: '1.2rem', margin: '2rem', paddingBottom: '2.5rem'}}>
            <Col>
            <h3> Options for Arrival to Final Destination </h3>
            <p style={{fontSize: '1.35rem', paddingTop: '2rem'}}> Price of average ride-share to X and surrounding areas is <span style={{fontWeight: 'bold', padding: '1rem', backgroundColor: '#ECECEC'}}>$100.17</span>  </p>
            <Button style={{padding: '1.2rem', marginTop: '2rem', fontSize: '1.2rem', paddingLeft: '2rem', paddingRight: '2rem', backgroundColor: 'black'}} appearance="primary" > View on Uber</Button>
            {/* <Image styles={{alignItems: 'right'}} src="/images/car1.png" alt="uber car"
              width = "150"
              height = "100" /> */}
            </Col>


          </Panel>
          
          <Button appearance="primary" color="blue" style={{padding:'1rem', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '1.2rem'}}>Select</Button>
        </Panel>

        <Panel header="" shaded style={{padding: '2rem', marginTop: '2rem'}}>
        <h4 style={{fontWeight: 'light'}}>None of these options work for me: </h4>
        <Button onClick={handleOpen} appearance="primary" color="blue" style={{padding: '1.2rem', marginTop:'1.5rem', fontSize: '1.2rem'}}> Request Voucher</Button>
        <Modal open={open} onClose={handleClose} size="lg">
                    <Modal.Header>
                        <Modal.Title>Request Voucher</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                        <Form fluid onChange={setFormValue} formValue={formValue}>
                            <Form.Group controlId="name-6">
          <Form.ControlLabel>Flight Number</Form.ControlLabel>
          <Form.Control name="name" />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email-6">
          <Form.ControlLabel>Name</Form.ControlLabel>
          <Form.Control name="email" type="email" />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password-6">
          <Form.ControlLabel>Trip Credit Number</Form.ControlLabel>
          <Form.Control name="password" type="password" autoComplete="off" />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="textarea-6">
          <Form.ControlLabel>Please briefly describe the reason for your voucher request</Form.ControlLabel>
          <Form.Control name="textarea" rows={5} accepter={Textarea} />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                        <Button onClick={handleClose} appearance="primary">
                        Confirm
                        </Button>
                        <Button onClick={handleClose} appearance="subtle">
                        Cancel
                        </Button>
                </Modal.Footer>
        </Modal>
        </Panel>
        </Container>
    </div>
  )
}