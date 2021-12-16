import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NTModalProps{
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NTModal({isOpen, onRequestClose}:NTModalProps) {

    const [type, setType] = useState('deposity')


    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
            <Container>
                <h2>Cadatrar Nava transação</h2>

                <input placeholder = "Titulo"></input>
                <input type="number" placeholder = "Valor"></input>

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={()=> {setType('deposity');}}
                        isActive={type === 'deposity'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={()=> {setType('withdraw');}}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder = "categoria"></input>
                <button type="submit">Cadatrar</button>
            </Container>
        </Modal>
    );
}