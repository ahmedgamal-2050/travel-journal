import logo from './images/world-icon.svg';
import data from './data'
import City from './City';

export default function App() {
    const cities = data.map((city) => {
        return (
            <City
                key={city.id}
                {...city}
            />
        )
    })
    return (
        <div className="app">
            <header className="d-flex justify-content-center align-items-center">
                <img src={logo} className="app-logo" alt="logo" />
                <span className="mx-2">my travel journal.</span>
            </header>
            <main className="row justify-content-center mt-4">
                <section className="col-lg-4 col-md-8 col-12">
                    {cities}
                </section>
            </main>
        </div>
    );
}
