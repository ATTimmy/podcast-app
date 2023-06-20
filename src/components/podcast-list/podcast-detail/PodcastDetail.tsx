import { Card, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './PodcastDetail.scss';

export default function PodcastDetail(): JSX.Element {
	const { state } = useLocation();
	const { podcastDetail } = state;
	const {
		description,
		image,
		titleName,
		authorName,
	}: {
		description: string;
		podcastId: string;
		image: string;
		titleName: string;
		authorName: string;
	} = podcastDetail;

	return (
		<div id='podcast-details'>
			<Container>
				<div>
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
			</Container>
		</div>
	);
}
