import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { SearchIconWrapper, StyledInputBase, Search } from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { searchArticle } from '../../store/slices/newsSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const navItems = ['Home', 'News', 'Profile'];
const drawerWidth = 240;

export function Header(props: any) {
  const { isLoggedIn } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation('ns1');

  const onChangeHandler = (e: any) => {
    dispatch(searchArticle({ value: e.target.value }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      ReactNews
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
    <CssBaseline />
      <AppBar position="fixed">
        <Toolbar className="custom-container">
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ReactNews
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => onChangeHandler(e)}
              placeholder={t('search') || ""}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button component={Link} to='/' sx={{ color: '#fff', marginLeft: 8 }}>
                    {t('home')}
                </Button>
                <Button component={Link} to='/news' sx={{ color: '#fff', marginLeft: 8 }}>
                {t('news')}
                </Button>
                <Button component={Link} to='/profile' sx={{ color: '#fff', marginLeft: 8 }}>
                    {isLoggedIn ? t('profile') : t('authorize') }
                </Button>
                <Button onClick={() => changeLanguage('ua')} sx={{ color: '#fff', marginLeft: 8 }} variant="contained" color="success">
                    UA
                </Button>
                <Button onClick={() => changeLanguage('en')} sx={{ color: '#fff', marginLeft: 2 }} variant="contained" color="success">
                    EN
                </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}