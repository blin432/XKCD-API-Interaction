import React, { Component } from 'react';
import { Button,Form,Container,Row,Col,Navbar} from 'react-bootstrap';
import {Accordion,Card, InputGroup,FormControl} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';


class Search extends Component {
    constructor(props){
      super(props)
      this.state={
        data:'',
        inputValue:'',
      }
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   
    }
  
    //lifecycle to retrieve all persisted Data
  
//   //Handler event for main input field 
    handleSearch(event){
      this.setState({
        inputValue:event.target.value
      });
    }
 
//     //Submit form to add notes to database
    handleSubmit(e) {
      e.preventDefault(); 
      let input = this.state.inputValue
      
      if(input< 1){
        return //must enter field to submit form
      }else{
        fetch(`https://xkcd.now.sh/?comic=${input}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({ data: data })
        })
        .catch(console.log)
       
        this.setState({inputValue:''}) //used to clear input field after submit
      }
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
              <Form  className="d-flex flex-row justify-content-center align-items-center" onSubmit={this.handleSubmit}>
                <Form.Group className="m-0 pl-2"  as={Col}>
                      <Form.Control type="text" value={this.state.inputValue}  onChange={this.handleSearch}/>
                </Form.Group>
                <Button  style={{display:"block"}} className = "m-0 mr-2" variant="primary" type="submit"> Search</Button>
              </Form>
              <img className = "latestImage" src={img} alt={title} title={alt}></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  }
  
  export default  withRouter(Search);