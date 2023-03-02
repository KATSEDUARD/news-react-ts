import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { Navigate } from 'react-router-dom';
import './styles.scss';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../store/slices/userSlice';

export function ProfilePage() {
    const user = useAppSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onClickHandler = () => {
        dispatch(logOut());
        navigate('/');
    };

    return <div className="profile-page-layout">
        {user.isLoggedIn ? <><h1>Welcome to profile page, {user.username}!</h1><Button variant='contained' color='error' onClick={onClickHandler}>Log Out</Button></> : <Navigate to="/" />}
    </div>;
};