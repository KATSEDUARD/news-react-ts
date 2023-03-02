import { Outlet } from 'react-router-dom';
import { Header } from '../header/view';
import { Footer } from '../footer/view';
import { RootState } from '../../store/store';
import { useAppSelector } from '../../store/hooks';

export function Root() {
    const isLoggedIn = useAppSelector((state: RootState) => state.user.isLoggedIn);
    
    return <>
        <Header isLoggedIn={isLoggedIn} />
        <Outlet />
        <Footer isLoggedIn={isLoggedIn} />
    </>;
};