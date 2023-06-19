import FilterDataPodcast from './FilterDataPodcast';

describe('FilterDataPodcast', () => {
	it('should filter and transform the data correctly', () => {
		const data = [
			{
				'im:name': {
					label: 'Podcast 1',
				},
				'im:image': [
					{
						label: 'image_1',
						attributes: {
							height: '55',
						},
					},
					{
						label: 'image_2',
						attributes: {
							height: '60',
						},
					},
				],
				'im:artist': {
					label: 'Author 1',
				},
				id: {
					attributes: {
						'im:id': '1',
					},
				},
			},
			{
				'im:name': {
					label: 'Podcast 2',
				},
				'im:image': [
					{
						label: 'image_3',
						attributes: {
							height: '55',
						},
					},
					{
						label: 'image_4',
						attributes: {
							height: '60',
						},
					},
				],
				'im:artist': {
					label: 'Author 2',
				},
				id: {
					attributes: {
						'im:id': '2',
					},
				},
			},
		];

		const expectedOutput = [
			{
				authorName: 'Author 1',
				id: '1',
				image: 'image_2',
				titleName: 'Podcast 1',
			},
			{
				authorName: 'Author 2',
				id: '2',
				image: 'image_4',
				titleName: 'Podcast 2',
			},
		];

		const result = FilterDataPodcast(data);

		expect(result).toEqual(expectedOutput);
	});
});
