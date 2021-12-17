import { create } from 'domain';
import { createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../services/api';

interface TransactionsProviderProps{
    children:ReactNode
};

interface Transaction {
    id: 1,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>




interface TransactionsContextData {
    transactions: Transaction[];
    createTransactions: (transactions: TransactionInput)=> Promise<void>;
}





const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData,
    );





export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransactions(transactionInput: TransactionInput){

       const response = await api.post('/transactions', {
           ...transactionInput,
           createdAt: new Date(),
        })
       const {transaction} = response.data

       setTransactions([
           ...transactions,
           transaction,

       ])
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransactions}}>
            {children}
        </TransactionsContext.Provider>
    );
}


export function useTransactions(){
    const context = useContext(TransactionsContext)
    return context;
}