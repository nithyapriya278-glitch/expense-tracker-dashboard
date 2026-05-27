import { useState } from "react"

function TransactionForm({ addTransaction }) {

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("expense")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !amount) return

    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type
    }

    addTransaction(newTransaction)

    setTitle("")
    setAmount("")
    setType("expense")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
      bg-gray-800
      p-6
      rounded-2xl
      mt-8
      shadow-lg
      border border-gray-700
      "
    >

      <h2 className="text-2xl font-bold mb-4">
        Add Transaction
      </h2>

      <div className="grid gap-4">

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
          p-3
          rounded-lg
          bg-gray-700
          outline-none
          border border-gray-600
          focus:border-blue-500
          transition
          duration-300
          "
        />

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="
          p-3
          rounded-lg
          bg-gray-700
          outline-none
          border border-gray-600
          focus:border-blue-500
          transition
          duration-300
          "
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="
          p-3
          rounded-lg
          bg-gray-700
          outline-none
          border border-gray-600
          focus:border-blue-500
          transition
          duration-300
          "
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          className="
          bg-blue-500
          hover:bg-blue-600
          p-3
          rounded-lg
          font-bold
          transition
          duration-300
          hover:scale-105
          "
        >
          Add Transaction
        </button>

      </div>

    </form>
  )
}

export default TransactionForm