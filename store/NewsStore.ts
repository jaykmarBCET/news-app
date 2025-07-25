import axios from "axios";
import Constants from 'expo-constants'
import { create } from "zustand";


const apiKey = Constants.expoConfig?.extra?.apiKey

const AxiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: apiKey,
  },
});

export interface articlesINterface {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  content: string;
}

interface useArticlesStoreInterface {
  article: articlesINterface[];
  topHeadLines: articlesINterface[];

  getEveryThingArticle: (query: string) => Promise<void>;
  getTopHeadlineArticle: (country: string, category: string) => Promise<void>;
}

export const useNewsStore = create<useArticlesStoreInterface>((set) => ({
  article: [],
  topHeadLines: [],

  getEveryThingArticle: async (query) => {
   
    try {
      const response = await AxiosInstance.get("/everything", {
        params: { q: query },
      });
      

      set({ article: response.data.articles || [] });
    } catch (error) {
      console.error("Error fetching everything articles:", error);
    }
  },

  getTopHeadlineArticle: async (country, category) => {
    try {
      const response = await AxiosInstance.get("/top-headlines", {
        params: { country, category },
      });
      
      set({ topHeadLines: response.data.articles || [] });
    } catch (error) {
      console.error("Error fetching top headline articles:", error);
    }
  },
}));
