const records = [];
const amountField = document.getElementById("amount");
const typeField = document.getElementById("type");
const incomeContainer = document.getElementById("incomeContainer");
const expenseContainer = document.getElementById("expenseContainer");

const addRecord = () => {
  const data = {
    id: records.length + 1,
    amount: parseFloat(amountField.value),
    type: typeField.value,
  };
  records.push(data);
  displayIncome(incomeContainer, "income");
  displayIncome(expenseContainer, "expense");

  const str = calculateProfitLoss();
  const h1 = document.createElement("h1");
  document.getElementById("main").appendChild(h1);
  h1.innerHTML = str;

  amountField.value = "";
  typeField.value = "";
};





const displayIncome = (container, type) => {
  container.innerHTML = "";
  const incomeRecord = filterRecords(type);
  incomeRecord.forEach((record) => {
    const incomeWrapper = document.createElement("div");
    container.appendChild(incomeWrapper);
    incomeWrapper.innerHTML = `
        <p> ${record.amount} </p>
        <p> ${record.type} </p>
        `;
  });

  const totalVal = total(type);

  const totalContainer = document.createElement("div");
  incomeContainer.appendChild(totalContainer);
  totalContainer.innerHTML = `
    <p>Total Income : ${totalVal}</p>
    `;
};

const filterRecords = (type) => {
  return records.filter((record) => record.type === type);
};

const total = (type) => {
  const filterIncome = filterRecords(type);
  let total = 0;
  filterIncome.forEach((elem) => {
    total += elem.amount;
  });
  return total;
};

const calculateProfitLoss = () => {
  const income = total("income");
  const expense = total("expense");
  const difference = income - expense;

  if (difference > 0) {
    return `Profit : ${difference}`;
  }
  return `Loss Of ${difference}`;
};
