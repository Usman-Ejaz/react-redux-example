// import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/actions';

function App() {
	const counter = useSelector(state => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			<header className="App-header">
				<p> counter: { counter }</p>
				<button onClick={() => dispatch(increment())}>Inrement By 1</button>
			</header>
		</div>
	);
}

export default App;
