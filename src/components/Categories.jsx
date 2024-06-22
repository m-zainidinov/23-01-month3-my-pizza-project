import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import filters from '../data/filters.json'

const Categories = ({ current, setCurrent}) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  
  return (
    <div className="categories">
      <ul>
        {
          filters.map((item) => (
            <li
              style={isDarkMode ? {background: '#282828', color: '#fff',
                ...(current === item.value && { background: '#FFA500', color: '#282828' }),
                  }
                : {}
              }
              onClick={() => setCurrent(item.value)}
              className={current === item.value ? 'active' : ''}>
              {item.label}
            </li>
          ))
        }
      </ul>
    </div >
  )
}

export default Categories