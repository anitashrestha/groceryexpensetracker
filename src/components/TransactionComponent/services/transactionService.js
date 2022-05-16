import TransactionData from "../TransactionData";

// common contant name diyeko, pachi change garirakhnu naparne vayera
const DBNAME = "db";

const getTransaction = () => {
	let storedTxns = JSON.parse(localStorage.getItem(DBNAME) || "[]");
	// if there is no saved transactions in db, show the one from json file.
	if (storedTxns.length === 0) {
		storedTxns = JSON.stringify(TransactionData);
	}
	return storedTxns;
};

const saveTransaction = (txnData) => {
	console.log("saving txn to localstorage");
	// First get the data we have
	const dataWeAlreadyHave = getTransaction();

	// append the new data "txnData" into existing one.
	const updatedData = [...dataWeAlreadyHave, txnData];

	// write it back to the local storage.
	localStorage.setItem(DBNAME, JSON.stringify(updatedData));
};

export { getTransaction, saveTransaction };

// NOTE: commented for future use.
// const baseUrl = process.env.REACT_APP_API_BASE_URL;

// const baseUrl = process.env.REACT_APP_API_BASE_URL;
// export async function getNewTransaction(formInputData) {
// 	return fetch(baseUrl + "/transactions").then((response) => {
// 		if (response.ok) return response.json();
// 		throw response;
// 	});
// }

// export async function saveNewTransaction(formInputData) {
// 	return fetch(baseUrl + "/transactions", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(formInputData),
// 	});
// }
