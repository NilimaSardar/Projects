import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch';
import Products from './components/products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

function App() {

  return (
    <>
      <NavBar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        {/* <Route path='users' element={<Users/>}/>
        <Route path='users/:userid' element={<UserDetails/>}/>
        <Route path='users/admin' element={<Admin/>}/> */}

        <Route path='users' element={<Users/>}>
          <Route path=':userid' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>

        <Route path='*' element={<NoMatch/>}/>
      </Routes>

    </>
  )
}

export default App
