import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './example/navchange/Home';
import Blogs from './example/navchange/Blogs';
import Layout from './common/layout/Layout';
import NoPage from './common/layout/NoPage';
import ReactDataTable from './example/ReactDataTable/ReactDataTable';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='react-datatable' element={<ReactDataTable />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
