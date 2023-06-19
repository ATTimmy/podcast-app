import { Card } from 'react-bootstrap';
import { type PodcastItem } from '../../../models/ModelStorePodcast';

export default function PodcastCard(data: PodcastItem[]): JSX.Element[] {
	const rows: JSX.Element[] = [];
	let row: JSX.Element[] = [];

	data.forEach((val: PodcastItem, index: number) => {
		row.push(
			<div className='podcast-column' key={val.id}>
				<Card border='dark' className='podcast-card'>
					<Card.Img src={val.image} />
					<Card.Body>
						<Card.Title>{val.titleName}</Card.Title>
						<Card.Text>{`Author: ${val.authorName}`}</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);

		if ((index + 1) % 4 === 0 || index === data.length - 1) {
			rows.push(
				<div className='podcast-row' key={index}>
					{row}
				</div>
			);
			row = [];
		}
	});

	return rows;
}
