import logo from '../../assets/img/logo.svg';
import './style.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>IsaTech - Vendas</h1>
                <p>
                    Desenvolvido por 
                     <a href="https://www.instagram.com/devisaias"> @devisaias</a>
                </p>
            </div>
        </header>

    )
}

export default Header;