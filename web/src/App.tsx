import React from 'react';
import { Routes, useNavigate } from 'react-router-dom';

import { useNuiEvent } from './hooks/useNuiEvent';
import { debugData } from './utils/debugData';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  },
]);

const App: React.FC = () => {
  const navigate = useNavigate();
  useNuiEvent<string>('setPage', (page) => {
    navigate('/' + page);
  });

  return (
    <div className="app">
      <Routes>{/* <Route path="/" element={<Component />} /> */}</Routes>
    </div>
  );
};

export default App;
