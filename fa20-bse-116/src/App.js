import React from 'react';
import Main from './Main.';
import ViewResults from './ViewResults';
import { Routes, Route } from "react-router-dom";
import ScheduleMAtches from './ScheduleMAtches';
function App() {
  return (
  <div>
 <Main/>
    <Routes>
      <Route path="/Results" element={<ViewResults />} />;
      <Route path="/Schedules" element={<ScheduleMAtches />} />;
        
    </Routes>
    </div>
    
  );
}

export default App;
