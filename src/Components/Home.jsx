import React, { Component } from 'react';
import { Button,Form,Container,Row,Col,Navbar} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class Home extends Component {
    constructor(props){
      super(props)
      this.state={
        data:'',
        
      }
  
    }
  
    //lifecycle to retrieve all persisted Data
    componentDidMount() {
        fetch('https://xkcd.now.sh/?comic=latest')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({ data: data })
        })
        .catch(console.log)
      }


  render(){
    let {img,alt,title} = this.state.data
    return (
      <div className ="project">
           <Navbar expand="lg" variant="light" bg="light"  >
          <p >Notes-app</p>
        </Navbar>
        <Container className="text-center">
          <Row>
            <Col md={{span: 8, offset: 2}} lg={{span: 8, offset: 2}}>
              <img className = "latestImage" src={img} alt={title} title ={alt}></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  }
  
  export default  withRouter(Home);