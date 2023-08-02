import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './example/navchange/Home';
import Blogs from './example/navchange/Blogs';
import Layout from './common/layout/Layout';
import NoPage from './common/layout/NoPage';
import ReactDataTable from './example/ReactDataTable/ReactDataTable';
import ExReducer from './example/reducer/ExReducer';
import Forms from './example/navchange/Forms';
import CounterComponent from './example/reducer/CounterComponent';
import { Counter } from './example/redux/Counter';
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='forms' element={<Forms />} />
            <Route path='reducer' element={<ExReducer />} />
            <Route path='react-datatable' element={<ReactDataTable />} />
            <Route path='counter-component' element={<CounterComponent />} />
            <Route path='counter-component-redux' element={<Counter />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
