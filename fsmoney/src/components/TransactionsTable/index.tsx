import { useContext,} from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./style";



export function TransactionTable() {
    const {transactions} = useTransactions();;


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(response =>(  
                    <tr key={response.id}>
                        <td>{response.title}</td>
                        <td className={response.type}>
                            {new Intl.NumberFormat('pt-BR', {
                            style: 'currency', 
                            currency:'BRL'})
                        .format(response.amount)}
                        </td>
                        <td>{response.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR')
                        .format(new Date(response.createdAt))}</td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </Container>
    );
}