import './styles/main.css'
import logoImage from './assets/logo-nlw-esports.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImage} alt="Next Level Week Exports Logo" />
      <h1 className="text-6xl text-white font-black mt-16 bg-galaxy-gradient bg-clip-text">
                Seu <span className="text-transparent">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
              <a href='' className='relative rounded-lg overflow-hidden'>
                <img src='/game-1.png' alt=''/> 
                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='font-bold text-white block'>Game of legends</strong>
                  <span className='text-zinc-300 text-sm block '>4 anúncios</span>
                </div>
              </a>  

              <a href='' className='relative rounded-lg overflow-hidden'>
                <img src='/game-2.png' alt=''/> 
                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='font-bold text-white block'>Dota</strong>
                  <span className='text-zinc-300 text-sm block '>3 anúncios</span>
                </div>
              </a>  

              <a href='' className='relative rounded-lg overflow-hidden'>
                <img src='/game-3.png' alt=''/> 
                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='font-bold text-white block'>Counter Strike</strong>
                  <span className='text-zinc-300 text-sm block '>6 anúncios</span>
                </div>
              </a> 

              <a href='' className='relative rounded-lg overflow-hidden'>
                <img src='/game-4.png' alt=''/> 
                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='font-bold text-white block'>Apex legends</strong>
                  <span className='text-zinc-300 text-sm block '>4 anúncios</span>
                </div>
              </a> 

              <a href='' className='relative rounded-lg overflow-hidden'>
                <img src='/game-5.png' alt=''/> 
                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='font-bold text-white block'>Game of legends</strong>
                  <span className='text-zinc-300 text-sm block '>4 anúncios</span>
                </div>
              </a> 

              <a href='' className='relative rounded-lg overflow-hidden'>
                <img src='/game-6.png' alt=''/> 
                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='font-bold text-white block'>Game of legends</strong>
                  <span className='text-zinc-300 text-sm block '>4 anúncios</span>
                </div>
              </a> 

              
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