import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/headers/Header.jsx";

export function NotFound() {
    return (
        <>
            <Header />
            <main>
                <section className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>404</h1>
                            <p>Norimas puslapis nerastas</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}