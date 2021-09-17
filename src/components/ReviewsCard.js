import { Card } from "react-bootstrap";

const ReviewsCard = ({ props }) => {
  return (
    <Card className="review-card">
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{props.quote}</p>
          <footer className="blockquote-footer">{props.rating}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default ReviewsCard;
