import './styles/main.css'
import logoImage from './assets/logo-nlw-esports.svg'
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImage} alt="Next Level Week Exports Logo" />
      <h1 className="text-6xl text-white font-black mt-16 bg-galaxy-gradient bg-clip-text">
                Seu <span className="text-transparent">duo</span> está aqui
      </h1>
    </div>
  )
}

export default App 