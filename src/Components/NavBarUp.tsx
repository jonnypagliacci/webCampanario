import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'

export default function NavBarUp () {
    return <div>
        <Navbar bg = 'myBlue' variant = 'dark' sticky='top'>
            <Navbar.Brand>
                <ul>
                    <li>Queretaro</li>
                    <img className='faceIcon' 
                    src='imagenesNavBarUp/facebook.png' 
                    alt=" " 
                    onClick={() => {window.open("https://www.facebook.com/laboratoriocampanario",)}} />
                </ul>
            </Navbar.Brand>
        </Navbar>
    </div>
}