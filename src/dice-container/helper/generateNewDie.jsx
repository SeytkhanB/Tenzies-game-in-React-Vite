
import {nanoid} from 'nanoid'

export default function generateNewDie() {
  return {
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid()
  }
}