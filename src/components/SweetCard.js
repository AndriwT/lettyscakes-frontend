import { Card, Button } from "react-bootstrap";

const SweetCard = ({ props }) => {
  const imagePlaceHolder =
    "https://assets.bonappetit.com/photos/59c924dc32e4b84f5a9e437a/8:5/w_4279,h_2674,c_limit/1017%20WEB%20WEEK1060.jpg";

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.image ? props.image : imagePlaceHolder}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>${props.price}</Card.Text>
        <Button variant="primary" href="/order">
          Place Order
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SweetCard;
