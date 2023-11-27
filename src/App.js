import React, { useState } from 'react'
import './App.css'
import * as StringManipulations from './library'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [activeClass, setActiveClass] = useState('');
  const [activeSubmenuClass, setActiveSubmenuClass] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    const instance = new StringManipulations[activeClass]()
    const result = instance[activeSubmenuClass](input)
    console.log(result)
    setResult(result)
  }

  const toggleClass = (className) => {
    setActiveClass(activeClass === className ? '' : className);

  };

  const toggleSubmenuClass = (className, method) => {
    setActiveSubmenuClass(activeSubmenuClass === method ? '' : method);
  };


  return (
    <div className='App'>
      <div className="sidebar">
        {Object.keys(StringManipulations).map((className) => (
          <div key={className}>
            <button
              onClick={() => toggleClass(className)}
              className={`sidebar-btn ${activeClass === className ? 'active' : ''}`}
            >
              {className}
            </button>
            <div className={`submenu ${activeClass === className ? 'active' : ''}`}>
              {Object.getOwnPropertyNames(StringManipulations[className].prototype)
                .filter(method => method !== 'constructor')
                .map((method) => (
                  <button
                    key={method}
                    onClick={() => toggleSubmenuClass(className, method)}
                    className={`submenu-btn ${activeSubmenuClass === method ? 'active' : ''}`}
                  >
                    {method}
                  </button>
                ))
              }
            </div>
          </div>
        ))}
      </div>
      <div className='main-content'>
        <div className='input-section'>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder='Enter your text here...'
          />
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
        <div className='output-section'>
          <textarea
            className='output-content'
            value={result}
            readOnly
            placeholder='The result will appear here...'
          />
        </div>
      </div>
    </div>
  )
}

export default App
