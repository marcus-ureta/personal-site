import Background from './Background.tsx'
import './App.css'

function App() {

  return (
    <>
      <h1 className="font-['Arial'] mt-2 text-right mr-3">© 2026 Marcus Ureta</h1>


      <Background/>
      
      {/* DESKTOP TASKBAR */}
      <footer>
        <div className="flex-1 hidden ml-4 sm:block">
          <p>[Opened Desktop Tabs]</p>
        </div>

        <div className="flex items-center gap-2 mr-4 mx-auto sm:ml-auto">
          <p>[BUG REPORT, MUTE, & TIME]</p>
        </div>
      </footer>
    </>
  )
}

export default App
