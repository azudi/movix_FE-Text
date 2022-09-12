import React, { useEffect } from 'react';
import "./assets/styles/main.scss"
import RootRoutes from './components/navigation/Routes';


import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()

 
  interface themes {
    light: {
        color: string;
        background: string;
    };
    dark: {
        color: string;
        background: string;
    };
}


function App() {

  return (
  <QueryClientProvider client={queryClient}>
      <RootRoutes/>
  </QueryClientProvider>
  );
}

export default App;
