import LeftPart from './components/leftPart'
import RightPart from './components/rightPart'
function App() {
  return (
    <div className="w-full m-10 flex flex-col justify-center  gap-16">
      <div className="flex justify-center items-center">
        <h1>Welcome to Keep Notes!</h1>
      </div>
      <div className="flex gap-5 justify-center ">
        <LeftPart />
        <RightPart />
      </div>
    </div>
  )
}

export default App
