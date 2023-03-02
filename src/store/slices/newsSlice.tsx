import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Article {
    id: number,
    title: string,
    summary: string,
    publishedAt: string,
    imageUrl: string
};

interface NewsState {
    news: Article[]
    filteredNews: Article[],
    searchRequest: string,
    newsAmount: number,
    typeOfFetch: string
};

const initialState: NewsState = {
    news: [],
    filteredNews: [],
    searchRequest: '',
    newsAmount: 9,
    typeOfFetch: 'fetch'
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    loadData: (state, action) => {
      if(state.typeOfFetch === 'loadMore') {
        state.news = [...state.news, ...action.payload];
        state.typeOfFetch = 'fetch';
      }
      else {
        state.news = action.payload;
      }
      
      state.filteredNews = state.news;
    },
    loadMore: (state) => {
      state.newsAmount += 9;
      state.typeOfFetch = 'loadMore';
    },
    searchArticle: (state, action) => {
      const searchQuery: string = action.payload.value.toLowerCase();

      const displayedNewsByTitle: Article[] = state.news.filter((article: Article) => {
          const searchValue: string = article.title.toLowerCase();
          
          return searchValue.indexOf(searchQuery) !== -1;
      });

      state.searchRequest = searchQuery;
      state.filteredNews = displayedNewsByTitle;
    },
    removeArticle: (state, action) => {
      state.filteredNews = state.filteredNews.filter((article: Article) => article.id !== action.payload.id);
      state.news = state.news.filter((article: Article) => article.id !== action.payload.id);
    }
  },
});

export const { loadData, loadMore, searchArticle, removeArticle } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news;

export const newsReducer = newsSlice.reducer;