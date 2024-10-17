import { Link } from 'react-router-dom';
import logo from '/src/assets/vite.svg';
import { HeaderNav } from '../HeaderNav';

export function UserHeader() {
    return (
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-2 mb-2 mb-md-0">
                    <Link to='/' className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={logo} alt="Logo" />
                    </Link>
                    USER
                </div>
                <HeaderNav />
                <div className="col-md-4 text-end">
                    <Link to='/profile' className="btn btn-outline-primary me-2">Profilis</Link>
                    <Link to='/logout' className="btn btn-primary">Atsijungti</Link>
                </div>
            </header>
    )
}