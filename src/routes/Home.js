import  PaginasWebList from '../components/PaginasWebList'
import Portada from '../components/Portada'
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
        <div id='paginasWeb'>
          <h1>Websites</h1>
          <PaginasWebList />
        </div>
    </div>
  )
}

export default Home