import Navbar from './components/Navbar.jsx'
import PlanPicker from './components/PlanPicker.jsx'
import PlanCard from './components/PlanCard.jsx'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />
      <PlanPicker />
      <main className="grid grid-cols-3 gap-8 px-20 pt-10">
        <PlanCard name="Starter" price={199} storage="10 GB storage" support="Email support" seats={PlanPicker.seatss} months={PlanPicker.monthss}/>
        <PlanCard name="Team" price={499} storage="100 GB storage" support="Chat support" seats={PlanPicker.seatss} months={PlanPicker.monthss}/>
        <PlanCard name="Business" price={999} storage="1000 GB storage" support="Phone support" seats={PlanPicker.seatss} months={PlanPicker.monthss}/>
      </main>

      <Footer />
    </div>
  );
}

export default App;