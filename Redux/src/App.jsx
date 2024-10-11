import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multi} from './Features/Slice'

export default function App() {
  const count = useSelector((state) => state.counter.value)
  const num = useSelector((state) => state.counter.num)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h1>{count}</h1>
        <h1>{num}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(multi())}>Multiply with 2</button>
      </div>
    </>
  )
}
