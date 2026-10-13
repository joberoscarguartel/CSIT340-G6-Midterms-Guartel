import { useState } from "react";

function Waitlist() {
  const [teams, setTeams] = useState(0);

  const handleJoin = () => {
    setTeams(teams + 1);
  };
  const handleClear = () => {
    setTeams(0);
  };

  return (
    <div className="flex items-center justify-between rounded-x1 border-2 border-[#000000] bg-[#EEEEEE] p-6">
        <div>
            <h3 className="text-2xl font-bold">Cloudline Enterprises is coming soon</h3>
            <p className="mt-1 text-lg">{teams} teams joined the waitlist.</p>
        </div>
        <div className="flex gap-4">
            <button className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]" onClick={handleJoin}>Join</button>
            <button className="cursor-pointer rounded-lg border-2 border-[#000000] px-8 py-3 text-xl font-bold" onClick={handleClear}>Clear</button>
        </div>
    </div>
  )
}

export default Waitlist