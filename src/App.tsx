import Home from "./container/Home/Home";

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/searchit" Component={Home} />
    </Routes>

  );
}

export default App;
