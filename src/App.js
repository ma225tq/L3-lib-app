import React, { useState } from 'react'
import * as StringManipulations from './library'
import { functionArguments } from './FunctionArguments'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [activeClass, setActiveClass] = useState('')
  const [activeSubMenuMethod, setActiveSubMenuMethod] = useState('')
  const [args, setArguments] = useState([])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  // Submit the input to the selected function
  const handleSubmit = () => {
    try {
      if (!activeSubMenuMethod) {
        alert('No function has been selected.')
        return
      }
      const instance = new StringManipulations[activeClass]()

      const argumentTypes = functionArguments[activeSubMenuMethod]

      // first argument is always the input
      const methodArguments = [input]

      argumentTypes.forEach((arg, index) => {
        if (arg !== 'string' && arg !== 'length' && arg !== 'steps') {
          methodArguments.push(args[index] || '') // Push the additionals arguments to the array
        }
        if (arg === 'length' || arg === 'steps') {
          methodArguments.push(parseInt(args[index]) || 0) // Pass an int if the function takes that
        }
      })

      // call the selected method with the prepared arguments
      try {
        const result = instance[activeSubMenuMethod](...methodArguments)
        setResult(result)
      } catch (error) {
        alert(error.message)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  // Toggle the active class of the sidebar buttons

  const toggleClass = (className) => {
    setActiveClass(activeClass === className ? '' : className)
  }

  // Toggle the active class of the submenu buttons
  const toggleSubMenuMethod = (method) => {
    setActiveSubMenuMethod(activeSubMenuMethod === method ? '' : method)
  }

  // set the arguments the function takes, from a predefined object

  const handleSubMenuMethodSelection = (selectedMethod) => {
    if (functionArguments.hasOwnProperty(selectedMethod)) {
      setArguments(functionArguments[selectedMethod].map(() => ''))
    } else {
      setArguments([])
    }
  }

  // handle the change of the additional arguments as the user inputs them

  const handleArgumentChange = (index, newValue) => {
    setArguments((prevArgs) => {
      const newArgs = [...prevArgs]
      newArgs[index] = newValue
      return newArgs
    })
  }

  function convertCamelCaseToRegular(string) {
    return string
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function (string) {
        return string.toUpperCase()
      })
      .trim()
      .toLowerCase()
  }

  return (
    <div className='App'>
      <div className='sidebar'>
        {Object.keys(StringManipulations).map((className) => (
          <div key={className}>
            <button
              onClick={() => toggleClass(className)}
              className={`sidebar-btn ${
                activeClass === className ? 'active' : ''
              }`}
            >
              {convertCamelCaseToRegular(className)}
            </button>
            <div
              className={`submenu ${activeClass === className ? 'active' : ''}`}
            >
              {Object.getOwnPropertyNames(
                StringManipulations[className].prototype
              )
                .filter((method) => method !== 'constructor')
                .map((method) => (
                  <button
                    key={method}
                    onClick={() => {
                      toggleSubMenuMethod(method)
                      handleSubMenuMethodSelection(method)
                    }}
                    className={`submenu-btn ${
                      activeSubMenuMethod === method ? 'active' : ''
                    }`}
                  >
                    {convertCamelCaseToRegular(method)}
                  </button>
                ))}
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
          <div className='submit-container'>
            <button className='submit-btn' onClick={handleSubmit}>
              Submit
            </button>
            {activeSubMenuMethod &&
              functionArguments[activeSubMenuMethod]
                .slice(1)
                .map(
                  (argType, index) =>
                    argType !== 'string' && (
                      <input
                        className='additional-arg'
                        key={`additional-arg-${index}`}
                        type='text'
                        value={args[index + 1] || ''}
                        onChange={(e) =>
                          handleArgumentChange(index + 1, e.target.value)
                        }
                        placeholder={`Enter ${convertCamelCaseToRegular(argType)}`}
                      />
                    )
                )}
          </div>
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
