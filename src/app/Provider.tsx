'use client'

import { Provider } from 'react-redux';
import { store } from './store/store';  // Ensure the store is correctly imported

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default App;
