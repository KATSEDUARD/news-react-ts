import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { Stack, Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Highlighter from 'react-highlight-words';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { RootState } from '../../../store/store';
import './styles.scss';
import { removeArticle } from '../../../store/slices/newsSlice';

export function NewsItem(props: any) {
    const { id, title, img, description, date } = props;
    const searchRequest = useAppSelector((state: RootState) => state.news.searchRequest);
    const dispatch = useAppDispatch();

    const onClickHandler = () => {
        dispatch(removeArticle({ id }));
    };

    return <div className="card">
    <Card>
        <CardMedia
            component="img"
            alt={title}
            height="260"
            image={img}
        />
        <div className="card-content">
            <div>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                    className="card-date"
                >
                    <CalendarTodayIcon fontSize="small"/>
                    <div>{date.slice(0, 10)}</div>
                </Stack>
            </div>
            <div className="card-title">
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[searchRequest]}
                    autoEscape={true}
                    textToHighlight={title}
                />
            </div>
            <div className="card-description">
                {description}
            </div>
            <Button variant="outlined" onClick={onClickHandler} color="error">Remove</Button>
        </div>
    </Card>
  </div>;
};