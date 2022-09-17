import {useState, useEffect} from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css'
import logoImage from './assets/logo-nlw-esports.svg'
import { GameCard } from './components/GameCard'
import { NewAdBanner } from './components/NewAdBanner'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/input'

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
              <Dialog.Title className='text-3xl text-white font-black'>Publique um anúncio</Dialog.Title>
              
                <form className="mt-8 flex flex-col gap-4">

                  <div className="flex flex-col gap-2">
                    <label className='font-semibold ' htmlFor='game'>Qual o game?</label>
                    {/* <input 
                      id='game' 
                      placeholder='Selecione o game que deseja jogar'
                      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                    /> */}
                    <Input id="game" placeholder="Selecione o game que deseja jogar" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor='name'>Seu nome (ou nickname)</label>
                    <Input id='name' placeholder='Como te chamam dentro do game'/>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor='yearsPlayning'>Joga a quantos anos?</label>
                      <Input id='yearsPlayning' type="number" placeholder='Tudo bem ser zero'/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor='discord'>Qual o seu discord?</label>
                      <Input id='discord' placeholder='Usuario@123'/>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor='weekDays'>Quando costuma jogar?</label>
                      <div className="grid grid-cols-4 gap-2">
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Segunda'>1</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Terça'>2</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Quarta'>3</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Quinta'>4</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Sexta'>5</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Sabado'>6</button>
                        
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor='hourStart'>Qual o horário do dia?</label>
                      <div className="grid grid-cols-2 gap-1">
                        <Input id='hourStart' type="time" placeholder='De'/>
                        <Input id='hourEnd' type="time" placeholder='Até'/>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-2 text-sm">
                    <input type="checkbox" />
                    Costumo me conectar ao chat de voz
                  </div>

                  <footer className="mt-4 flex justify-end gap-4">
                    
                    <Dialog.DialogClose 
                     type="button" 
                     className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">Cancelar
                    </Dialog.DialogClose >

                    <button
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                    type="submit">
                      <GameController size={24}/>
                      Encontar duo
                    </button>
                  </footer>

                </form>
              
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
     
    </div>
  )
}

export default App 