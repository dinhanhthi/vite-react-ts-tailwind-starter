import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-11/12 flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex gap-4 h-12 items-center justify-center w-full">
            <img src={viteLogo} className="logo h-full animate-bounce" alt="Vite logo" />
            <img src={reactLogo} className="logo react h-full animate-spin" alt="React logo" />
          </div>

          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-4xl text-slate-800">Vite React TS Starter</h1>
            <h2 className="text-xl text-slate-600">Created by Anh-Thi Dinh</h2>
          </div>

          <p></p>
        </div>
      </div>
    </div>
  )
}

export default App
