import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './PodcastList.scss';
import PodcastCard from './components/PodcastCard';

export default function PodcastList(): JSX.Element {
	const [podcasts, setPodcasts] = useState<JSX.Element[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const podcastState: any = useSelector((state) => state);

	useEffect(() => {
		setPodcasts(PodcastCard(podcastState.podcasts?.podcasts));
		setIsLoading(false);
	}, [podcastState]);

	return (
		<div id='podcast-list'>
			<h1>Podcast List</h1>
			{isLoading ? (
				<div className='d-flex justify-content-center align-items-center'>
					<div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			) : (
				<div className='podcast-body'>{podcasts}</div>
			)}
		</div>
	);
}
