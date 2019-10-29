import React, { Component } from 'react';
import {Container,Row,Col,Navbar} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom"; 

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
            this.setState({ data: data })
        })
        .catch(console.log)
      }


  render(){
    let {img,alt,title,year} = this.state.data
    return (
      <div className ="project">
        <div className= 'p-3 bg-light'>
            <Link to="/" className="latest p-3 text-dark">Latest</Link>
            <Link to="/search" className="search p-3 text-dark">Search</Link>
        </div>
        <Container className="text-center mt-3">
          <Row>
            <Col md={{span: 8, offset: 2}} lg={{span: 8, offset: 2}}>
              <img className = "latestImage mt-4" src={img} alt={title} title ={alt}></img>
              <h3 className = "mt-3">{year}</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  }
  
  export default  withRouter(Home);