import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface PodcastState {
	podcasts: any;
	lastFetchTimestamp: number;
}

interface AppState {
	podcasts: PodcastState;
}

const apiUrl =
	'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

// Creates an async action to make the API call
export const fetchPodcasts = createAsyncThunk(
	'podcasts/fetchPodcasts',
	async (_, { getState }): Promise<any> => {
		const state = getState() as AppState;
		const { lastFetchTimestamp } = state.podcasts.podcasts;
		const dataNow = Date.now();
		const day = 24 * 60 * 60 * 1000;
		if (dataNow - lastFetchTimestamp < day) {
			return (getState() as AppState).podcasts.podcasts;
		}

		try {
			const response = await axios.get(apiUrl);
			return response.data;
		} catch (error) {
			throw new Error('Failed to fetch podcasts');
		}
	}
);
