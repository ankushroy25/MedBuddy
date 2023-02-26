import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MentalHealthComponent = () => {
  return (
    <Card>
      <Card.Img
        id="landing-logos"
        crossOrigin="anonymous"
        variant="top"
        src={"/images/landimages/mental.jpg"}
      />
      <Card.Body>
        <Card.Title>My Mental Health </Card.Title>
        <LinkContainer to={`/mental-health`}>
          <Button variant="primary">Check</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default MentalHealthComponent;
