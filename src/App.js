import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Add from './Add'
import Subtract from './Subtract'

// const Home = props => {
//   return (
//     <main className='hero'>
//       <Link className='left hero-link' to={'/add'}>
//         Add
//       </Link>
//       <span className='hero-divider' />
//       <Link className='right hero-link' to={'/add'}>
//         Subtract
//       </Link>
//     </main>
//   )
// }
const Home = props => {
  // const [slide, setSlide] = useState('')
  // useEffect(() => {
  //   setTimeout(() => setSlide('slide'), 250)
  // }, [])
  const [slide] = useState('slide')
  return (
    <main className='hero'>
      <div className='hero-background' />
      <div className='hero-title'>
        <div className={`${slide} hero-line`}>
          <Link className='hero-text' to={'/add'}>
            Add
          </Link>
        </div>
        <div className={`${slide} hero-line`}>
          <span className='hero-text'>Or</span>
        </div>
        <div className={`${slide} hero-line`}>
          <Link className='hero-text' to={'/add'}>
            Take
          </Link>
        </div>
        <div className={`${slide} hero-line`}>
          <Link className='hero-text' to={'/add'}>
            Away
          </Link>
        </div>
      </div>
    </main>
  )
}

const App = props => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/add' component={Add} />
      <Route path='/subtract' component={Subtract} />
      <div />
    </Router>
  )
}

export default App
