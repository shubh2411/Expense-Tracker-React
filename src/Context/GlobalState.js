import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initalState = {
	transactions: [],
};

// Create Context
export const GlobalContext = createContext(initalState);

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initalState);

	// Actions
	// To delete transaction when clicked on X button
	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	// To add transaction when clicked on Add Transaction button
	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
