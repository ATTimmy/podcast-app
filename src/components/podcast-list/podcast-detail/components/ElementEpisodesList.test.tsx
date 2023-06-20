import { render, screen } from '@testing-library/react';
import ElementEpisodesList from './ElementEpisodesList';
import { type Episode } from '../models/ModelPodcastDetail';

describe('ElementEpisodesList', () => {
	const filterDataEpisodes: Episode[] = [
		{
			description: 'description',
			episodeDuration: '30 min',
			episodeName: 'Episode 1',
			date: '2023-06-01',
			url: 'url',
		},
	];

	test('renders the correct number of episodes', () => {
		render(ElementEpisodesList(filterDataEpisodes));

		const episodeRows = screen.getAllByRole('row');
		expect(episodeRows.length - 1).toBe(filterDataEpisodes.length);
	});

	test('renders the episode details correctly', () => {
		render(ElementEpisodesList(filterDataEpisodes));

		const episodeNameCells = screen.getAllByText(/Episode \d/);
		const dateCells = screen.getAllByText(/2023-06-\d/);
		const durationCells = screen.getAllByText(/min/);

		expect(episodeNameCells.length).toBe(filterDataEpisodes.length);
		expect(dateCells.length).toBe(filterDataEpisodes.length);
		expect(durationCells.length).toBe(filterDataEpisodes.length);
	});
});
