import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import './styles.scss';
import { useTranslation } from 'react-i18next';

export function Footer(props: any) {
    const { isLoggedIn } = props;
    const { t } = useTranslation();

    return <>
    <BottomNavigation
        showLabels
        className="footer"
    >
    <BottomNavigationAction component={Link} to="/" className="footer-link" label={t('home')} />
    <BottomNavigationAction component={Link} to="/news" className="footer-link" label={t('news')} />
    <BottomNavigationAction component={Link} to="/profile" className="footer-link" label={isLoggedIn ? t('profile') : t('authorize')} />
  </BottomNavigation>
  <ToastContainer position="bottom-right" theme="light" />
  </>
};