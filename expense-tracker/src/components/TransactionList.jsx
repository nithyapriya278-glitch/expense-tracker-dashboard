function TransactionList({ transactions, deleteTransaction }) {

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
        Transaction History
      </h2>

      {
        transactions.length === 0 ? (
          <div className="text-center py-10">

  <h3 className="text-xl text-gray-400">
    No transactions yet
  </h3>

  <p className="text-gray-500 mt-2">
    Start adding your income and expenses
  </p>

</div>
        ) : (
          <div className="space-y-4">

            {transactions.map((item) => (

              <div
                key={item.id}
                className="
                flex
                items-center
                justify-between
                bg-gray-700
                p-4
                rounded-lg
                hover:bg-gray-600
                transition
                duration-300
                "
              >

                <div>
                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                  <p
                    className={
                      item.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    ₹ {item.amount}
                  </p>
                </div>

                <button
                  onClick={() => deleteTransaction(item.id)}
                  className="
                  bg-red-500
                  hover:bg-red-600
                  px-4
                  py-2
                  rounded-lg
                  "
                >
                  Delete
                </button>

              </div>

            ))}

          </div>
        )
      }

    </div>
  )
}

export default TransactionList