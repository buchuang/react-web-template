import React from "react"
import logo from "images/logo.svg"
import "./App.scss"
import config from "../config"
const RemoteApp = React.lazy(() => import("@msp/react-base/components/Demo"))
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn Reacts
        </a>
        <p>process.env.MSP_ENV {process.env.MSP_ENV}</p>
        <p>process.env.MODE_ENV {process.env.MODE_ENV}</p>
        <p>API {config.API}</p>
        <p>APPID {config.APPID}</p>
        {/* <Suspense fallback={"loading"}>
              <RemoteApp />
            </Suspense> */}
      </header>
    </div>
  )
}

export default App
