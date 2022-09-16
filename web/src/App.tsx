import './styles/main.css'
import logoImage from './assets/logo-nlw-esports.svg'
import { GameCard } from './components/GameCard'
import { NewAdBanner } from './components/NewAdBanner'
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImage} alt="Next Level Week Exports Logo" />
      <h1 className="text-6xl text-white font-black mt-16 bg-galaxy-gradient bg-clip-text">
                Seu <span className="text-transparent">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
          <GameCard bannerUrl='/game-1.png' title='game of legends' adsCount={5}/>
          <GameCard bannerUrl='/game-2.png' title='game of legends' adsCount={2}/> 
          <GameCard bannerUrl='/game-3.png' title='game of legends' adsCount={10}/> 
          <GameCard bannerUrl='/game-4.png' title='game of legends' adsCount={7}/> 
          <GameCard bannerUrl='/game-5.png' title='game of legends' adsCount={9}/> 
          <GameCard bannerUrl='/game-6.png' title='game of legends' adsCount={5}/>               
      </div>

     <NewAdBanner />
    </div>
  )
}

export default App 