/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type Podcast } from '../../components/podcast-list/models/Podcast';

interface PodcastState {
	podcasts: Podcast[];
	lastFetchTimestamp: number;
}

interface AppState {
	podcasts: PodcastState;
}

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

// We create an asynchronous action to make the API call
export const fetchPodcasts = createAsyncThunk(
	'podcasts/fetchPodcasts',
	async (_, { getState }): Promise<any> => {
		const { lastFetchTimestamp } = (getState() as AppState).podcasts;
		if (Date.now() - lastFetchTimestamp < ONE_DAY_IN_MS) {
			return (getState() as AppState).podcasts.podcasts;
		}

		try {
			const response = await axios.get(import.meta.env.VITE_API_URL);
			return response.data;
		} catch (error) {
			throw new Error('Failed to fetch podcasts');
		}
	}
);

const podcastsSlice = createSlice({
	name: 'podcasts',
	initialState: {
		podcasts: [],
		lastFetchTimestamp: 0,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPodcasts.fulfilled, (state, action) => {
			state.podcasts = action.payload;
			state.lastFetchTimestamp = Date.now();
		});
	},
});

export default podcastsSlice.reducer;
