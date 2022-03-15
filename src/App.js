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
            <Route path="/TikTok" element={<Layout />}>
                <Route path="/TikTok" element={<Home />} />
                <Route path="/TikTok/following" element={<Following />} />
            </Route>
            <Route path="/TikTok/live" element={<NotUpdate />} />
            <Route path="/TikTok/not-update" element={<NotUpdate />} />
        </Routes>
    )
}

export default App