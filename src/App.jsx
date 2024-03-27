import './App.module.css'
import './global.css'
import { Header } from './components/Header'
import { TaskCreator } from './components/TaskCreator'

 function App() {
  return(
    <>
    <div>
      <Header/>
      <main>
      <TaskCreator/>
      </main> 
    </div>
    </>
  )
}

export default App