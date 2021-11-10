
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNTModal: () => void;
}

export function Header({ onOpenNTModal }: HeaderProps) {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="fs money" />
                <button type="button" onClick={onOpenNTModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}