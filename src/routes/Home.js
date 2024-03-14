import Modalidad from '../components/Modalidad'
import PaginasWebList from '../components/PaginasWebList'
import Portada from '../components/Portada'
import QrsList from '../components/QrsList'
import TextoInformativo from '../components/TextoInformativo'
import WidgetTechnologies from '../components/WidgetsTechnologies'

const Home = () => {

  return (
    <div>
        <div>
          <Portada />
        </div>
        <div id='widgetsTechnologies'>
          <WidgetTechnologies />
        </div>
        <div id='sobreNosotros'>
          <h2>About us!</h2>
          <TextoInformativo />
        </div>
        <div id='opcionesDePago'>
          <h2>Payment options</h2>
          <Modalidad />
        </div>
        <div id='paginasWeb'>
          <h2>Websites</h2>
          <PaginasWebList />
        </div>
        <div id='qrs'>
          <h2>QR Menu</h2>
          <QrsList />
        </div>
    </div>
  )
}

export default Home