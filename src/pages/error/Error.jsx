import './style.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import BackgroundButton from '../../components/buttons/BackgroundButton/BackgroundButton'
import RedLineButton from '../../components/buttons/RedLineButton/RedLineButton'

const Error = () => {
    return (
        <>
            <Navbar white={false}  scrolledOff={true}/>
            <div className="error-page">
                <div className="error-container">

                    <div className="error-header">
                        ¡Ups!
                    </div>
                    <div className="error-code">
                        404
                    </div>
                    <div className="error-message">
                        Lo siento, la página que buscas no se encuentra disponible. Por favor, inténtalo de nuevo más tarde o regresa al inicio para encontrar lo que necesitas.
                    </div>
                    <div className="error-actions">
                        <BackgroundButton
                            text="Volver"
                            background_color="red"
                            comeBack={true}
                        />
                        <RedLineButton
                            text="Inicio"
                            background_color="red"
                            redirect="/"
                        />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Error
