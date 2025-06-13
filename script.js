let expenses = [];

function addExpense() {
    const desc = document.getElementById("desc").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
    const date = new Date().toLocaleDateString();

    if (!desc || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const entry = { desc, amount, date };
    expenses.push(entry);

    updateList();
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}

function updateList() {
    const list = document.getElementById("expense-list");
    const totalEl = document.getElementById("total");
    list.innerHTML = "";

    let total = 0;
    expenses.forEach(e => {
        const li = document.createElement("li");
        li.textContent = `${e.date} - ${e.desc}: ${e.amount} PKR`;
        list.appendChild(li);
        total += e.amount;
    });

    totalEl.textContent = total.toFixed(2);
}

function downloadData() {
    const blob = new Blob([JSON.stringify(expenses, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "expenses.json";
    link.click();
}
