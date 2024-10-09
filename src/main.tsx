import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { PersistGate } from 'redux-persist/integration/react'
import store, {  } from './store/store.ts'
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
         <App />
    {/* </PersistGate> */}
    
    </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
