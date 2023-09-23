import './styles/App.css'
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
import ErrorPage from './components/ErrorPage/ErrorPage'
import Oneproject from './components/Project/oneProject'

// projects

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<Info />} />
        <Route path="contact" element={<Contact />}/>
        <Route path="projects" element={<Project />} />
        <Route path= "projects/:id" element={<Oneproject />} />
        <Route path="*" element={<ErrorPage />} />
        
      </Route>
    ))

  return (
    <div>
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
