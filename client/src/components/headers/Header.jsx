import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext.jsx';
import { UserHeader } from './UserHeader.jsx';
import { PublicHeader } from './PublicHeader.jsx';
import { AdminHeader } from './AdminHeader.jsx';

export function Header() {
    const { isLoggedIn, role } = useContext(GlobalContext);

    return (
        <div className="container">
                {!isLoggedIn && <PublicHeader />}
                {isLoggedIn && role === 'user' && <UserHeader />}
                {isLoggedIn && role === 'admin' && <AdminHeader />}
        </div>
    )
}