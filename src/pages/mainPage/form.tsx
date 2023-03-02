import { Button, TextField, Stack } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { authorize } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

export function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onClickHandler = () => {
        dispatch(authorize({ username, password }));
        navigate('/profile');
    };

    return <Stack
    direction="column"
    justifyContent="flex-start"
    alignItems="center"
    spacing={1}
>
    <TextField
        id="username"
        label="Username"
        variant="outlined"
        value={username}
        onChange={handleUsernameChange}
    />
    <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handlePasswordChange}
    />
    <Button variant="contained" color="primary" onClick={onClickHandler}>
        Authorize
    </Button>
</Stack>
};