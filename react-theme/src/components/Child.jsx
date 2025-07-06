import {React, useContext} from 'react'
import ThemeContext from '../ThemeContext'

function Child() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className='child'>
        <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Child