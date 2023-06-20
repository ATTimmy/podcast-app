import moment from 'moment';
import { type Episode } from '../models/ModelPodcastDetail';

export default function FilterDataEpisodes(data: any): Episode[] {
	const dataClean = data.slice(1);
	const filterDataEpisodes: Episode[] = dataClean.map((val: any) => {
		const durationInSeconds = Math.floor(val.trackTimeMillis / 1000);

		const duration = moment.duration(durationInSeconds, 'seconds');

		const formattedDuration = moment
			.utc(duration.asMilliseconds())
			.format('HH:mm:ss');

		const filterObject = {
			description: val.description,
			episodeDuration: formattedDuration,
			episodeName: val.trackName,
			date: moment(val.releaseDate).format('D MMMM YYYY'),
			url: val.episodeUrl,
		};

		return filterObject;
	});
	return filterDataEpisodes;
}
