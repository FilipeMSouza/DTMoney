import { DashBoard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NTModal } from "./components/NTModal";
import {TransactionsProvider} from './hooks/useTransactions'


Modal.setAppElement('#root');

export function App() {

    const [isNTModalOpen, setIsNTModalOpen] = useState(false);

    function handleOpenNTModal() {
        setIsNTModalOpen(true);
    }
    function handleCloseNTModal() {
        setIsNTModalOpen(false);
    }
    return (
        <TransactionsProvider>
            <Header onOpenNTModal={handleOpenNTModal} />
            <DashBoard />
            <NTModal 
                isOpen={isNTModalOpen} 
                onRequestClose ={handleCloseNTModal}
            />
            <GlobalStyle />
        </TransactionsProvider>
    );
}


