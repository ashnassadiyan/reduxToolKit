import React from 'react';
import './App.css';
import Routes from './Router/Routes';
import Navbar from './Components/navbar/Navbar';
import Layout from '../src/Components/Layout/Layout'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Typography, Space } from 'antd'

function App() {
  return (
    <div className="App">

      <Router >
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout >
            <div className="routes">
              <Routes />
            </div>
          </Layout>
        </div>

        <div className="footer">
          <Typography.Title level={5} style={{ color: "white" }}>
            Cryptoverse< br />
            All Right Riservered
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
          </Space>
        </div>
      </Router>
    </div>
  );
}

export default App;
