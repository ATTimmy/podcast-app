import { Card, Container, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './PodcastDetail.scss';
import { usePodcastEpisodes } from './hooks/usePodcastEpisodes';

export default function PodcastDetail(): JSX.Element {
	const { state } = useLocation();
	const { podcastDetail } = state;
	const {
		description,
		id: podcastId,
		image,
		titleName,
		authorName,
	}: {
		description: string;
		id: string;
		image: string;
		titleName: string;
		authorName: string;
	} = podcastDetail;
	const [podcastEpisode, loading] = usePodcastEpisodes(podcastId);

	return (
		<div id='podcast-details'>
			<Container>
				<div className='podcast-details-container'>
					<div className='card-detail'>
						<Card border='0' className='podcast-card shadow-sm'>
							<Card.Img src={image} />
							<Card.Body>
								<Card.Title>{titleName}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>{`by ${authorName}`}</Card.Subtitle>
								<Card.Text>Description:</Card.Text>
								<Card.Text>{description}</Card.Text>
							</Card.Body>
						</Card>
					</div>
					{loading && (
						<div className='loading-spinner'>
							<Spinner animation='border' role='status'>
								<span className='visually-hidden'>Loading...</span>
							</Spinner>
						</div>
					)}
					{!loading && <div className='list-episodes'>{podcastEpisode}</div>}
				</div>
			</Container>
		</div>
	);
}
