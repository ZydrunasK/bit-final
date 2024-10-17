import { Footer } from "../components/Footer.jsx";
import { Header } from "../components//header/Header.jsx";
import { Outlet } from 'react-router-dom';

export function PublicLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}