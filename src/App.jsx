import Navigation from './components/Navigation'

function App(props) {  
  return (
    <div class="container-fluid">
      <Navigation />      
      {props.children}
    </div>
  )
}

export default App
