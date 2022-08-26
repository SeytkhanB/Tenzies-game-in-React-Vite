
import { useEffect, useState } from 'react'
import Dice from './Dice'
import generateNewDie from './helper/generateNewDie'
import Confetti from 'react-confetti'



export default function DiceContainer() {
  const [diceState, setDiceState] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  // To end game
  useEffect(() => {
    setTenzies(false)
    const allHeld = diceState.every(die => die.isHeld)
    const firstValue = diceState[0].value
    const allSameValue = diceState.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [diceState])


  // To generate new Dice
  function allNewDice() {
    const diceArr = []
    for (let i = 0; i < 10; i++) {
      diceArr.push(generateNewDie())
    }
    return diceArr
  }
 
  // To roll dice
  function rollDice() {
    if (!tenzies) {
      setDiceState(prevDice => prevDice.map(die => {
        return die.isHeld ?
          die :
          generateNewDie()
      }))
      setClickCount(clickCount + 1)
    } else {
      setTenzies(false)
      setDiceState(allNewDice())
      setClickCount(0)
    }
  }

  // To hold dice
  function holdDice(id) {
    setDiceState(prevDice => {
      return prevDice.map(die => {
        return die.id === id ? 
          {...die, isHeld: !die.isHeld} : 
          die
      })
    })
  }

  const dice = diceState.map(die => {
    return <Dice
              key={die.id}
              holdDice={() => holdDice(die.id)}
              value={die.value}
              isHeld={die.isHeld}
            />
  })
  
  return (
    <div 
      className='bg-gray-50 h-full w-full 
      rounded-md max-w-3xl max-h-[48rem] min-h-[28rem]
      flex justify-center items-center flex-col'
    >
      {tenzies && <Confetti />}
      <h1
        className='text-2xl font-bold'
      >
        {
          tenzies ?
          'You won! 🥳' : 
          'Tenzies'
        }
      </h1>
      <p className='w-1/2 text-center text-base'>
        Roll until all dice are the same. 
        Click each Dices to freeze it at its current 
        value between rolls.
      </p>

      <div className="grid grid-cols-5 gap-4 mx-8 my-8">
        {dice}
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='mr-8'>Rolled <b>{clickCount}</b> times</h1>
        <button
          onClick={rollDice}
          className='text-1xl font-bold text-white 
          rounded bg-indigo-500 py-1.5 px-6'
        >
          {!tenzies ? 'Roll' : 'Reset'}
        </button>
      </div>
    </div>
  )
}