import {
	type PodcastItem,
	type PodcastItemData,
} from '../models/ModelStorePodcast';

export default function FilterDataPodcast(data: any): PodcastItemData[] {
	const filterObject: PodcastItemData[] = data.map((val: any) => {
		const dataObject: PodcastItem = {
			authorName: val['im:artist'].label,
			id: val.id.attributes['im:id'],
			image: val['im:image'].find(
				(find: any) => find.attributes.height === '60'
			)?.label,
			titleName: val['im:name'].label,
		};
		return dataObject;
	});
	return filterObject;
}
