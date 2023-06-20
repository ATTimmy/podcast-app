import { type PodcastItem } from '../../../../models/ModelStorePodcast';

export default function GetPodcastSearch(
	data: PodcastItem[],
	searchTerm: string
): PodcastItem[] {
	const filteredData = data.filter((val: PodcastItem) => {
		const { authorName, titleName } = val;
		return (
			authorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			titleName.toLowerCase().includes(searchTerm.toLowerCase())
		);
	});
	return filteredData;
}
