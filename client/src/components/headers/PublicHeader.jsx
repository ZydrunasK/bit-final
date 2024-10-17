import { Link } from 'react-router-dom';
import logo from '/src/assets/vite.svg';
import { HeaderNav } from '../HeaderNav';

export function PublicHeader() {
    return (
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-2 mb-2 mb-md-0">
                    <Link to='/' className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <HeaderNav />
                <div className="col-md-4 text-end">
                    <Link to='/login' className="btn btn-outline-primary me-2">Prisijungti</Link>
                    <Link to='/register' className="btn btn-primary">Registruotis</Link>
                </div>
            </header>
    )
}