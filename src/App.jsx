import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


// pages
import Root from './pages/Root'
import Project from './components/Project/Project'
import Info from './components/Info/Info'
import Contact from './components/Contact/Contact'
import StarWars from './components/Projects/StarWars'
import Knuten from './components/Projects/Knuten'
import LitRate from './components/Projects/LitRate'
import Mario from './components/Projects/Mario'
import ReactForum from './components/Projects/ReactForum'
import StreakCounter from './components/Projects/StreakCounter'

// projects

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<Info />} />
        <Route path="project" element={<Project />}>
          <Route path="projectOne" element={<StarWars/>} />
          <Route path="projectTwo" element={<Knuten/>} />
          <Route path="projectThree" element={<LitRate/>} />
          <Route path="projectFour" element={<Mario/>} />
          <Route path="projectFive" element={<ReactForum/>} />
          <Route path="projectSix" element={<StreakCounter/>} />
        </Route>
        <Route path="contact" element={<Contact />}/>
      </Route>
    ))

  return (
    <div>
      <RouterProvider router={ router } />
    </div>
  )
}

export default App