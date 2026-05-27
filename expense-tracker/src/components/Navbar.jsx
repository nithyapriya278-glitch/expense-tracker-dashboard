import { FaWallet } from "react-icons/fa"

function Navbar() {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      bg-gray-800/80
      backdrop-blur-md
      p-5
      rounded-2xl
      border border-gray-700
      shadow-lg
      mb-8
      "
    >

      <div className="flex items-center gap-3">
        <FaWallet className="text-3xl text-blue-400" />

        <h1 className="text-2xl font-bold">
          Expense Tracker
        </h1>
      </div>

      <p className="text-gray-400">
        Manage Your Finances
      </p>

    </div>
  )
}

export default Navbar