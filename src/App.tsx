import React from 'react';
import Navigator from './navigation/Navigator';
import AuthState from "./context/AuthState";

const App = () => {
  return (
    <AuthState>
      <Navigator/>
    </AuthState>
  );
};

export default App;
