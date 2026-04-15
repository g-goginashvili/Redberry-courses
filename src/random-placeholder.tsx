import { LoginModal } from "./components/login-modal/login-modal";
import { RegistrationModal } from "./components/registration-modal/registration-modal";

export const RandomPlaceholderPage = () => {
    return (
        <RegistrationModal isOpen={true} onClose={() => { }} />
    );
}