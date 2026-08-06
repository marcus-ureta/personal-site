import './App.css'

function App() {

  return (
    <>
      <h1 className="font-['Arial'] mt-2 text-right mr-3">© 2026 Marcus Ureta</h1>


      {/* DESKTOP TASKBAR */}
      <footer>
        <div className="ml-2 flex-2/3 hidden sm:block">
          <p>[Opened Desktop Tabs]</p>
        </div>

        <div className="flex-1/3 justify-end content-end">
          <p>[BUG REPORT, MUTE, & TIME]</p>
        </div>
      </footer>
    </>
  )
}

export default App
