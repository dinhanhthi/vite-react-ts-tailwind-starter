import React from 'react'
import { FcIdea } from 'react-icons/fc'

import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-11/12 flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex h-12 w-full items-center justify-center gap-4">
            <img src={viteLogo} className="h-full animate-bounce" alt="Vite logo" />
            <img src={reactLogo} className="h-full animate-spin" alt="React logo" />
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-semibold text-slate-800">
              Vite 🤝 React 🤝 TypeScript 🤝 Tailwind 🤝 React Icons
            </h1>
            <h2 className="text-xl text-slate-700">Created by Anh-Thi Dinh</h2>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-lg bg-sky-100 py-2 px-4 text-sky-900 shadow-xl">
            <FcIdea className="text-2xl" />
            <div>
              Make components inside <code className="text-pink-700">src/components/</code> for
              testing.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
