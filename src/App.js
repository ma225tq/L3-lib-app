import React, { useState } from 'react'
import * as StringManipulations from './library'
import { functionArguments } from './FunctionArguments'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [activeClass, setActiveClass] = useState('')
  const [activeSubmenuClass, setActiveSubmenuClass] = useState('')
  const [args, setArgs] = useState([])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  // Submit the input to the selected function when user clicks the submit button
  const handleSubmit = () => {
    try {
      if (!activeSubmenuClass) {
        console.error('No function has been selected.')
        return
      }
      const instance = new StringManipulations[activeClass]()

      const methodArgs = getArgs()

      // call the selected method with the prepared arguments
      try {
        const result = instance[activeSubmenuClass](...methodArgs)
        setResult(result)
      } catch (error) {
        alert(error.message)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const getArgs = () => {
    const argTypes = functionArguments[activeSubmenuClass]

      // first argument is always the input
      const methodArgs = [input]

      argTypes.forEach((arg, index) => {
        if (arg !== 'string' && arg !== 'length' && arg !== 'steps') {
          methodArgs.push(args[index] || '') // Push the additionals arguments to the array
        }
        if (arg === 'length' || arg === 'steps') {
          methodArgs.push(parseInt(args[index]) || 0) // Pass an int if the function takes that
        }
      })

      return methodArgs
  }

  // Toggle the active class of the sidebar buttons

  const toggleClass = (className) => {
    setActiveClass(activeClass === className ? '' : className)
  }

  // Toggle the active class of the submenu buttons
  const toggleSubmenuClass = (method) => {
    setActiveSubmenuClass(activeSubmenuClass === method ? '' : method)
  }

  // set the arguments the function takes, from a predefined object

  const handleFunctionSelection = (selectedMethod) => {
    if (functionArguments.hasOwnProperty(selectedMethod)) {
      setArgs(functionArguments[selectedMethod].map(() => ''))
    } else {
      setArgs([])
    }
  }

  // handle the change of the additional arguments as the user inputs them

  const handleArgChange = (index, newValue) => {
    setArgs((prevArgs) => {
      const newArgs = [...prevArgs]
      newArgs[index] = newValue
      return newArgs
    })
  }

  function camelCaseToRegularCase(text) {
    return text
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
              {camelCaseToRegularCase(className)}
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
                      toggleSubmenuClass(method)
                      handleFunctionSelection(method)
                    }}
                    className={`submenu-btn ${
                      activeSubmenuClass === method ? 'active' : ''
                    }`}
                  >
                    {camelCaseToRegularCase(method)}
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
            {activeSubmenuClass &&
              functionArguments[activeSubmenuClass]
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
                          handleArgChange(index + 1, e.target.value)
                        }
                        placeholder={`Enter ${camelCaseToRegularCase(argType)}`}
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