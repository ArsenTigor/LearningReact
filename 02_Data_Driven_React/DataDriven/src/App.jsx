import react from 'react' 
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Card from './component/Card'
import Data from './Data'

export default function App() {
  const cards = Data.map(item => {
    return(
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='main-container'>
        {cards}
      </div>
      

      
    </div>
  )
}



