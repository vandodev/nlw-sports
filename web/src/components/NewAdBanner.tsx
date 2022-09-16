import { MagnifyingGlassPlus } from 'phosphor-react'


export const NewAdBanner = () => {
    return (
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
    )
}