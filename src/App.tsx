import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ReactDataTable from './example/ReactDataTable/ReactDataTable';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <label>Sample Application</label>;
      <ReactDataTable />
    </QueryClientProvider>
  );
}

export default App;
