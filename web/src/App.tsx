import {useState, useEffect} from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css'
import logoImage from './assets/logo-nlw-esports.svg'
import { GameCard } from './components/GameCard'
import { NewAdBanner } from './components/NewAdBanner'

export interface Game {
    id: string
    title: string
    bannerUrl: string
    _count: { ads: number }
}

function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() =>{
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      setGames(data);
    })
  },[])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImage} alt="Next Level Week Exports Logo" />
      <h1 className="text-6xl text-white font-black mt-16 bg-galaxy-gradient bg-clip-text">
                Seu <span className="text-transparent">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">

        {games.map(game =>{
          return(
            <GameCard 
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}                 
              
      </div>

        <Dialog.Root>
          <NewAdBanner ></NewAdBanner>
          <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
              <Dialog.Title>Publique um anúncio</Dialog.Title>
              <Dialog.Content>
                Formulário
              </Dialog.Content>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
     
    </div>
  )
}

export default App 