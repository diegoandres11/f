import './NavBar.css'
import BotonComponente from "./BotonComponente"
import CartWidget from './CartWidget'


export default function NavBar(){
    return (
    <section className='nav'>
        <h1>Patitas Felices</h1>
        <nav className='navegador'>
            <BotonComponente nombre='Inicio' color='#3498db'/>
            <BotonComponente nombre='Caninos' color='#3498db'/>
            <BotonComponente nombre='Felinos'color='#3498db'/>
            <BotonComponente nombre='Otro'color='#3498db'/>
        </nav>
        <CartWidget/>
    </section>
        

    )
}