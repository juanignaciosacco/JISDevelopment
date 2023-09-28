import  PaginasWebList from '../components/PaginasWebList'
import Portada from '../components/Portada'
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
          <h2>Sobre nosotros</h2>
          <TextoInformativo />
        </div>
        <div id='paginasWeb'>
          <h2>Websites</h2>
          <PaginasWebList />
        </div>
    </div>
  )
}

export default Home