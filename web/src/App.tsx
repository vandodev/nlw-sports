import './styles/main.css'
import logoImage from './assets/logo-nlw-esports.svg'
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
    </div>
  )
}

export default App 