function BalanceCard({ title, amount, color }) {

  return (
    <div
      className="
      bg-gray-800
      p-6
      rounded-2xl
      shadow-lg
      hover:scale-105
      transition
      duration-300
      border border-gray-700
      "
    >

      <h2 className="text-gray-400 text-lg">
        {title}
      </h2>

      <p className={`text-4xl font-bold mt-4 ${color}`}>
        ₹ {amount}
      </p>

    </div>
  )
}

export default BalanceCard