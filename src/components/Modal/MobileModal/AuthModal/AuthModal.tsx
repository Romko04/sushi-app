import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import RegistrationModal from './Registration';
import LoginModal from './LoginModal';
const AuthModal = () => {
    const {typeModal} = useSelector((state:RootState)=>state.products)
    return (
        typeModal === 'registration'
        ? <RegistrationModal />
        : <LoginModal />
    )
}

export default AuthModal;
