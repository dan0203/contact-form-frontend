import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <Form />
                    {/* Ajouter message OK/KO */}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
