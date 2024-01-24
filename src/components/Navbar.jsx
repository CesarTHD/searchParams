import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Navbar = () => {
  const param = useParams();
  
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
    </nav>
  )
}

export default Navbar