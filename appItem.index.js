const App = props => {
  const {app} = props
  app.map(eachItem => (
    <li>
      <div>
        <h1>{eachItem.appName}</h1>
        <img src={eachItem.imageUrl} alt={eachItem.appName} />
      </div>
    </li>
  ))
}

export default App
