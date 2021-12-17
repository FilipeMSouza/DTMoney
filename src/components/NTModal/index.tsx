import Modal from 'react-modal';
import { api } from '../../services/api';
import { useState, FormEvent, useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
interface NTModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NTModal({ isOpen, onRequestClose }: NTModalProps) {

    const { createTransactions } = useTransactions();


    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposity');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransactions({
            category,
            title,
            type,
            amount,

        });
        
        setTitle('');
        setCategory('');
        setType('deposit');
        setAmount(0);


        onRequestClose();
    }




    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadatrar Nava transação</h2>

                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}

                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadatrar</button>
            </Container>
        </Modal>
    );
}