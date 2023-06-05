import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import ReactDataTable from './example/ReactDataTable/ReactDataTable';

function App() {
  // Create a QueryClient instance
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <ReactDataTable />
      </div>
    </QueryClientProvider>
  );
}

export default App;
