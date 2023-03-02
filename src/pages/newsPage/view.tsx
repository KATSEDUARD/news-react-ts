import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './styles.scss';
import { NewsItem } from './newsItem/view';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchNews } from '../../store/actions/newsActions';
import { Article, loadMore } from '../../store/slices/newsSlice';
import { Button } from '@mui/material';

export function NewsPage() {
    const news = useAppSelector((state: RootState) => state.news)
    const dispatch = useAppDispatch();

    const onClickHandler = () => {
        dispatch(loadMore());
    };

    useEffect(() => {
        dispatch(fetchNews(news.newsAmount, news.typeOfFetch));
    }, [dispatch, news.newsAmount]);
  
    return <div className="news-page-layout custom-container">
            <Grid className="news-container" container spacing={3}>
                {news.filteredNews.length < 1 ? <Typography variant="h4" className="headline">
                No News
                </Typography> : news.filteredNews.map((article: Article) => 
                <Grid item sm={12} md={6} lg={4} key={`${article.id}-${article.title}`}>
                    <NewsItem id={article.id} title={article.title} description={article.summary} date={article.publishedAt} img={article.imageUrl} />
                </Grid>)}
            </Grid>
            <Button className="button-load-more" variant="contained" onClick={onClickHandler}>Load More</Button>
      </div>
};