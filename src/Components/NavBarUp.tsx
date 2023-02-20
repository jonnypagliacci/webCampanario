import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'

export default function NavBarUp () {
    return <div>
        <Navbar bg = 'info' variant = 'dark' sticky='top'>
            <Navbar.Brand>
                Queretaro
            </Navbar.Brand>
        </Navbar>
    </div>
}