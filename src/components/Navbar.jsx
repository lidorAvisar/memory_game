import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div style={{position:'absolute',top:'0%'}}>
        <ul className='list-unstyled d-flex'>
          <li className='nav-item dropdown col-1 col-md-3 col-lg-5 col-xl-7 mt-3 ms-3'>
            <button class="btn btn-success dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
              Memory Games
            </button>
            <ul class="dropdown-menu dropdown-menu-dark mt-1" style={{background:'rgba(25,20,25,1)',borderRadius:'3px 10px 10px 10px',border:'1px solid red'}}>
              <li><Link className='dropdown-item' to={'/megic_memory_game'}>Megic game</Link></li>
              <li><Link className='dropdown-item' to={'/animals_memory_game'}>Animals game</Link></li>
              <li><Link className='dropdown-item' to={'/anime_memory_game'}>Anime game</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
