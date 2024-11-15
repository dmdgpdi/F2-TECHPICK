import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/providers/ThemeProvider.tsx';
import { router } from './router.config';
import '@/styles/reset.css.ts';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster />
        <div id="portalContainer" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
