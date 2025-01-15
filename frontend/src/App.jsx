
import { Button } from "@/components/ui/button"
import CardInfoPage from "./pages/CardInfoPage"

// routing and code splitting

function App() {
  return (
  <>
    {/* navbar */}
    <div className="w-full h-[70px] flex items-center px-24 bg-white">
      <p className="text-[25px] font-jakarta font-semibold">BAKAR</p>
      
      <div className="ml-auto flex">
        <p className="cursor-pointer text-[17px]">Issued cards</p>
        <p className="ml-14 cursor-pointer text-[17px]">Transactions</p>
      </div>
    </div>
    <CardInfoPage/>
  </>
  )
}

export default App
