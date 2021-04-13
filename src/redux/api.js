import axios from 'axios';

const incomeUrl = 'http://localhost:8080/api/budgets/incomes';
const expenseUrl = 'http://localhost:8080/api/budgets/expenses';
const authUrl = 'http://localhost:5000/api/user';

const notesUrl = 'http://localhost:5000/api/notes';

export const getIncome = () => axios.get( `${ incomeUrl }` );

export const createIncome = ( newIncome ) => axios.post( `${ incomeUrl }/create/income`, newIncome );

export const updateIncome = ( id, updatedIncome ) => axios.patch( `${ incomeUrl }/update/income/${ id }`, updatedIncome );

export const deleteIncome = ( id ) => axios.delete( `${ incomeUrl }/delete/income/${ id }` );

export const getExpenses = () => axios.get( expenseUrl );

export const createExpenses = ( newExpenses ) => axios.post( `${ expenseUrl }/create`, newExpenses );

export const updateExpenses = ( id, updatedExpenses ) => axios.patch( `${ expenseUrl }/update/${ id }`, updatedExpenses );

export const deleteExpenses = ( id ) => axios.delete( `${ expenseUrl }/delete/${ id }` );

export const getAllUser = () => axios.get( authUrl );

export const signUpUser = ( users ) => axios.post( `${ authUrl }/signup`, users );


export const allNotes = () => axios.get( notesUrl );

export const createNote = (notesData) => axios.post(`${notesUrl}/create`, notesData)
