import React from "react"
import ReactDOM from "react-dom"

let values = []
let currentHook = 0

function useState(initialState) {
  if (typeof values[currentHook] === 'undefined')
    values[currentHook] = initialState

  let hookIndex = currentHook

  function setState(nextValue) {
    values[hookIndex] = nextValue
    ReactDOM.render(<MyName />, document.getElementById("root"))
  }

  return [values[currentHook++], setState]
}



function MyName() {
  currentHook = 0

  const [enableFirstName, setEnableFirstName] = useState(false)
  const [name, setName] = enableFirstName ? useState("") : ['', () => []]
  const [lastName, setLastName] = useState("")

  function handleEnableChange(evt) {
    setEnableFirstName(!enableFirstName)
  }

  function handleChange(evt) {
    setName(evt.target.value)
  }

  function handleLastNameChange(evt) {
    setLastName(evt.target.value)
  }

  return (<div>
    <h1>My name is: {name} {lastName}</h1>
    <input type="checkbox" value={enableFirstName} onChange={handleEnableChange} />
    <input type="text" value={enableFirstName ? name : ""} onChange={handleChange} />
    <input type="text" value={lastName} onChange={handleLastNameChange} />
  </div>)
}

export default MyName