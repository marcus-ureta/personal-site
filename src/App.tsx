
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import DesktopPage from './pages/DesktopPage';
import BugReportPage from './pages/BugReportPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DesktopPage/>}/>
          <Route path="/bug-report" element={<BugReportPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
