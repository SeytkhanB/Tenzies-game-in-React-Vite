
export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  }
  return (
    <h1
      style={styles}
      onClick={props.holdDice}
      className="w-12 h-12 rounded shadow-md
      flex justify-center items-center cursor-pointer"
    >
      {props.value}
    </h1>
  )
}