import React, { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import { Name } from "../components";
import { Col, Row, Grid } from "react-bootstrap";

class Home extends Component {
  
  render() {
    return (
      <Row>
        <Col>
        <div className="outer">
          <Col xs={12}>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
            <Name />
            <Col xs={12}>
                <Link href="www.google.com"><h2>Prashant Kaushik</h2></Link>
            </Col>
          </Col>
          <style jsx>
            {`
              .outer{
                    text-align: center;
                    align-content: center;
              }
          `}
          </style>
          </div>
        </Col>
      </Row>
    )
  }
}



export default Home;
