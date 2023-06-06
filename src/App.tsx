import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TaskPlanner from './example/forms/TaskPlanner';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className='container p-5'>
      <QueryClientProvider client={queryClient}>
        <TaskPlanner />
      </QueryClientProvider>
    </div>
  );
}

export default App;
