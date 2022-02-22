import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2021");
	const changeFilterByYear = (year) => {
		setFilteredYear(year);
		console.log("expenses.js" + year);
	};
	const filteredExpenses = props.expenses.filter((expense) => {
		const year = expense.date.getFullYear().toString();
		return year === filteredYear;
	});
	
	

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilterByYear={changeFilterByYear}
				/>
				<ExpensesChart expenses = {filteredExpenses} />
				<ExpensesList items={filteredExpenses}/>  
			</Card>
		</div>
	);
};
export default Expenses;
