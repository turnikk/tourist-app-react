import './App.css';
import GoogleMap from './components/GoogleMap';
import TopBar from './components/TopBar';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <TopBar />
                    <GoogleMap />
                </header>
            </div>
        </Provider>
    );
}

export default App;
