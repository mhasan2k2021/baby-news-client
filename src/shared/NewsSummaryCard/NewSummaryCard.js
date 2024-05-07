import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NewSummaryCard = ({ news }) => {
  const { _id, title, author, details, image_url, total_view } = news;
  console.log(news);
  return (
    <div className="mb-5">
      <Card>
        <Card.Header>
          <div>
            <Image
              roundedCircle
              style={{ height: "60px" }}
              src={author.img}
            ></Image>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewSummaryCard;
