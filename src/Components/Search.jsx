import React, { Component } from 'react';
import { Button,Form,Container,Row,Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom"; 

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

//Handler event for main input field 
    handleSearch(event){
      this.setState({
        inputValue:event.target.value
      });
    }
 
//Submit form to add notes to database
    handleSubmit(e) {
      e.preventDefault(); 
      let input = this.state.inputValue
      if(input< 1){
        return //must enter field to submit form
      }else{
        fetch(`https://xkcd.now.sh/?comic=${input}`)
        .then(res => res.json())
        .then((data) => {
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
        <div className= 'p-3'>
            <Link to="/" className="latest p-3">Latest</Link>
            <Link to="/search" className="search p-3">Search</Link>
        </div>
        <Container className="text-center mt-3">
          <Row>
            <Col md={{span: 8, offset: 2}} lg={{span: 8, offset: 2}}>
              <Form  className="d-flex flex-row justify-content-center align-items-center" onSubmit={this.handleSubmit}>
                <Form.Group className="m-0 pl-2"  as={Col}>
                      <Form.Control type="text" className = "searchInput" value={this.state.inputValue}  onChange={this.handleSearch}/>
                </Form.Group>
                <Button  style={{display:"block"}} className = "searchSubmit m-0 mr-2" variant="primary" type="submit"> Search</Button>
              </Form>
              <img className = "searchImage mt-5" src={img} alt={title} title={alt}></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  }
  
  export default  withRouter(Search);