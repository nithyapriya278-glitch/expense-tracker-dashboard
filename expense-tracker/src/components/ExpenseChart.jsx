import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"

import { Pie } from "react-chartjs-2"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

function ExpenseChart({ transactions }) {

  const expenseTransactions =
    transactions.filter(
      (item) => item.type === "expense"
    )

  const data = {
    labels: expenseTransactions.map(
      (item) => item.title
    ),

    datasets: [
      {
        label: "Expenses",
        data: expenseTransactions.map(
          (item) => item.amount
        ),

        backgroundColor: [
          "#3B82F6",
          "#EF4444",
          "#10B981",
          "#F59E0B",
          "#8B5CF6",
          "#EC4899",
          "#14B8A6",
          "#F97316",
        ],

        borderColor: "#111827",
        borderWidth: 2,
        hoverOffset: 15,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
    },
  }

  return (
    <div
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
        Expense Analytics
      </h2>

      <div className="max-w-sm mx-auto">
        <Pie data={data} options={options} />
      </div>

    </div>
  )
}

export default ExpenseChart