import './styles/main.css'
import logoImage from './assets/logo-nlw-esports.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'
import { GameCard } from './components/GameCard'
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

      <div className='pt-1 mt-8 bg-galaxy-gradient self-stretch rounded-lg overflow-hidden '>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center  '>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu Duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar</span>
          </div>

          <button className='py-3 px-4 flex items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white rounded'>
            <MagnifyingGlassPlus size={24}/>
            Publocar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App 