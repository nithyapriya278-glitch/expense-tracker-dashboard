import { useEffect, useState } from "react"
import BalanceCard from "./components/BalanceCard"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import ExpenseChart from "./components/ExpenseChart"
import Navbar from "./components/Navbar"

function App() {

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions =
      localStorage.getItem("transactions")

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : []
  })

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  const deleteTransaction = (id) => {
    const updatedTransactions =
      transactions.filter((item) => item.id !== id)

    setTransactions(updatedTransactions)
  }

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    )
  }, [transactions])

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0)

  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0)

  const balance = income - expenses

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">

      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <BalanceCard
          title="Total Balance"
          amount={balance}
          color="text-blue-400"
        />

        <BalanceCard
          title="Income"
          amount={income}
          color="text-green-400"
        />

        <BalanceCard
          title="Expenses"
          amount={expenses}
          color="text-red-400"
        />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

  <div className="lg:col-span-1">
    <TransactionForm addTransaction={addTransaction} />
  </div>

  <div className="lg:col-span-2">
    <ExpenseChart transactions={transactions} />
  </div>

</div>

<TransactionList
  transactions={transactions}
  deleteTransaction={deleteTransaction}
/>

    </div>
  )
}

export default App