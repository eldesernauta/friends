import "../../styles/Post.scss";
import heartIcon from "../../assets/img/heart.svg";
import commentIcon from "../../assets/img/comment.svg";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const Post = ({img, title, season, episode, director, date, views}) => {
  return (
    <Card
      style={{
        width: "18em",
      }}
    >
      <img alt="Sample" src={img} />
      <CardBody className="d-flex flex-column justify-content-start align-items-start">
        <CardSubtitle className="mb-2 text-muted small" tag="h6">
          Season: {season}<br/>
          Episode: {episode}
        </CardSubtitle>
        <CardTitle tag="h6">{title}</CardTitle>
        <CardText className="align-left">
          {director}
        </CardText>
        <CardText className="text-muted" tag="h6">
          <img
            src={commentIcon}
            className="comment-icon"
            alt="comment-icon"
            width="20px"
          />
          {date}
        </CardText>
        <Button className="position-absolute right-1 btn-danger">
          <img
            src={heartIcon}
            className="heart-icon"
            alt="heart-icon"
            width="10px"
          />
          {views}
        </Button>
      </CardBody>
    </Card>
  );
};

export default Post;
