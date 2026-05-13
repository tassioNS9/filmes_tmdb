import React, { useEffect } from 'react';
import Navigation from './navigation';
import useTmdb from './hooks/useTmbd';

function App() {
  const { getNowPlaying } = useTmdb();

  useEffect(() => {
    getNowPlaying();
  }, []);

  return <Navigation />;
}

export default App;
