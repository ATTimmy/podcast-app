import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
	type AppState,
	type PodcastItemData,
	type StorePodcastData,
} from './models/ModelStorePodcast';
import FilterDataPodcast from './utils/FilterDataPodcast';
import { API_URL } from '../../constants/constants';

// Creates an async action to make the API call
export const fetchPodcasts = createAsyncThunk(
	'podcasts/fetchPodcasts',
	async (_, { getState }): Promise<PodcastItemData[]> => {
		const state = getState() as AppState;
		const { lastFetchTimestamp } = state.podcasts;
		const dataNow = Date.now();
		const day = 24 * 60 * 60 * 1000;

		if (dataNow - lastFetchTimestamp < day) {
			return state.podcasts.podcasts;
		}

		try {
			const response = await axios.get(API_URL);
			const responseDataPodcast: StorePodcastData = response.data?.feed?.entry;
			const respFilterPodcast: PodcastItemData[] =
				FilterDataPodcast(responseDataPodcast);
			return respFilterPodcast;
		} catch (error) {
			throw new Error('Failed to fetch podcasts');
		}
	}
);
