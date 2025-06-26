
import PaginasWebList from '../components/PaginasWebList'
import Portada from '../components/Portada'
import QrsList from '../components/QrsList'
import TextoInformativo from '../components/TextoInformativo'
import NuestrosServicios from '../components/NuestrosServicios'
import WidgetTechnologies from '../components/WidgetsTechnologies'
import { useLanguage } from '../context/LanguageContext'

const Home = () => {

  const { langauge } = useLanguage()

  return (
    <div>
      {langauge === ' en' ?

        <>
          <div>
            <Portada />
          </div>
          <div id='widgetsTechnologies'>
            <WidgetTechnologies />
          </div>
          <div id='paginasWeb'>
            <h2>Websites</h2>
            <PaginasWebList />
          </div>
          <div id='qrs'>
            <h2>QR Menu</h2>
            <QrsList />
          </div>
          <div>
            <h2>Our Services</h2>
            <NuestrosServicios />
          </div>
          {/* <div id='opcionesDePago'>
          <h2>Payment options</h2>
          <Modalidad />
        </div> */}
          <div id='sobreNosotros'>
            <h2>About us!</h2>
            <TextoInformativo />
          </div>
        </>
        :
        <>
          <div>
            <Portada />
          </div>

          <div id='widgetsTechnologies'>
            <WidgetTechnologies />
          </div>

          <div id='paginasWeb'>
            <h2>Sitios Web</h2>
            <PaginasWebList />
          </div>

          <div id='qrs'>
            <h2>Menú QR</h2>
            <QrsList />
          </div>

          <div>
            <h2>Servicios</h2>
            <NuestrosServicios />
          </div>
          {/* <div id='opcionesDePago'>
                <h2>Opciones de pago</h2>
                <Modalidad />
              </div> */}
          <div id='sobreNosotros'>
            <h2>¡Sobre nosotros!</h2>
            <TextoInformativo />
          </div>
        </>
      }

    </div>
  )
}

export default Home