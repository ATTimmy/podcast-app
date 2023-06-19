import { useEffect, useState } from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function createObject(data: any): JSX.Element[] {
	return data.map((val: any) => (
		<Col key={val.id}>
			<Card>
				<Card.Img variant='top' src={val.image} />
				<Card.Body>
					<Card.Title>{val.titleName}</Card.Title>
					<Card.Text>{val.authorName}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	));
}

export default function PodcastList(): JSX.Element {
	const [podcasts, setPodcasts] = useState<JSX.Element[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const test: any = useSelector((state) => state);

	useEffect(() => {
		setPodcasts(createObject(test.podcasts.podcasts));
		setIsLoading(false);
	}, [test]);

	return (
		<div>
			<h1>Podcast List</h1>
			{isLoading ? (
				<div className='d-flex justify-content-center align-items-center'>
					<div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			) : (
				<Row xs={1} md={2} lg={4} className='g-4'>
					{podcasts}
				</Row>
			)}
		</div>
	);
}
