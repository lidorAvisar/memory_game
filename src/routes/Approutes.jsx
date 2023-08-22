import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../components/Home'
import Magic_memory_game from '../components/Magic_memory_game'
import Animals_memory_game from '../components/Animals_memory_game'
import Anime_memory_game from '../components/Anime_memory_game'

export default function Approutes() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/megic_memory_game' element={<Magic_memory_game/>}/>
                        <Route path='/animals_memory_game' element={<Animals_memory_game/>}/>
                        <Route path='/anime_memory_game' element={<Anime_memory_game/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}
