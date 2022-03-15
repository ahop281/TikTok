import { Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Following from './pages/Following'
import NotUpdate from './pages/NotUpdate'

import './App.scss'
import './scss/Responsive.scss'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/following" element={<Following />} />
                
            </Route>
            <Route path="/live" element={<NotUpdate />} />
            <Route path="/not-update" element={<NotUpdate />} />
        </Routes>
    )
}

export default App