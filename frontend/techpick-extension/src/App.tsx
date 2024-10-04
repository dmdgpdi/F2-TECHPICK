import { RouterProvider } from 'react-router-dom';
import { router } from './routers/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/reset.css.ts';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;