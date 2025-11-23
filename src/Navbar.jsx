import { Link } from 'react-router-dom'
import { useTheme } from './ThemeContext.jsx'

const Navbar = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/tasks'>Tasks</Link>
            <button onClick={() => toggleTheme()}>Switch to {theme === "light" ? "Dark" : "Light"} Mode</button>
        </nav>
    )
}

export default Navbar
