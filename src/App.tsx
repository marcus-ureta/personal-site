import Background from './components/moving_background/Background.tsx'
import './App.css'

import DesktopView from './features/desktop/DesktopView.tsx'
import { TabManagerProvider } from './features/desktop/tabManager/TabManagerContext.tsx'
import Taskbar from './features/taskbar/Taskbar.tsx'

function App() {

  return (
    <>
      <Background/>

      <h1 className="relative font-['Arial'] mt-2 text-right mr-3 z-1 pointer-events-none">© 2026 Marcus Ureta</h1>

      <TabManagerProvider>
        <DesktopView/>
        <Taskbar/>
      </TabManagerProvider>
    </>
  )
}

export default App
