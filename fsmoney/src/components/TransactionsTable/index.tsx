import { Container } from "./style";

export function TransactionTable(){
    return(
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
                    <tr>
                        <td>Desenvolcimento de site</td>
                        <td className = "deposit" >R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>3/11/2021</td>
                    </tr>
                    <tr>
                        <td>Hamburger</td>
                        <td className = "withdraw" >- R$35,00</td>
                        <td>Alimentação</td>
                        <td>29/10/2021</td>
                    </tr>
                    <tr>
                        <td>Revisão carro</td>
                        <td className = "withdraw">- R$1200,00</td>
                        <td>Mecânica</td>
                        <td>23/10/2021</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    );
}