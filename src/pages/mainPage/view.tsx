import { useAppSelector } from '../../store/hooks';
import './styles.scss';
import { RootState } from '../../store/store';
import { Form } from './form';


export function MainPage() {
    const user = useAppSelector((state: RootState) => state.user);

    return <div className="main-page-layout">
        { user.isLoggedIn ? <h1>Welcome to main page!</h1> : <Form /> }
    </div>;
};