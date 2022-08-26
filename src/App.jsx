
import './App.css'
import DiceContainer from './dice-container/DiceContainer'

function App() {
  return (
    <main 
      className='bg-slate-800 h-screen w-screen p-16 
                  flex justify-center items-center flex-col'
    >
      <DiceContainer />
    </main>
  )
}
export default App