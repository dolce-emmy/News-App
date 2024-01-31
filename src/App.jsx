import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Tech from './components/Tech';
import Sport from './components/Sport';
import Container from './contexts/Container';
import Entertainment from './components/Entertainment';
import Team from './components/Team';
import Team2 from './components/Team2';
import About from './components/About';
import './styles/App.scss';
//import './styles/extra.css';

function App() {
    return (
        <Container>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route
                            path="entertainment"
                            element={<Entertainment />}
                        />
                        <Route path="technology" element={<Tech />} />
                        <Route path="sport" element={<Sport />} />
                        <Route path="team" element={<Team2 />} />
                        <Route path="about" element={<About />} />
                    </Route>
                    {/* <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route
                            path="entertainment"
                            element={<Entertainment />}
                        />
                        <Route path="technology" element={<Tech />} />
                        <Route path="sport" element={<Sport />} />
                        <Route path="team" element={<Team />} />
                    </Route> */}
                </Routes>
            </div>
        </Container>
    );
}

export default App;
