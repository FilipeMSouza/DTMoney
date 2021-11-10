import Modal from 'react-modal';

interface NTModalProps{
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NTModal({isOpen, onRequestClose}:NTModalProps) {
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}>
            <h2>Cadatrar nova transação</h2>
        </Modal>
    );
}