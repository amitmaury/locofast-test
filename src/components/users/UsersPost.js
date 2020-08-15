import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as UsersService from "../../services/users.service";
import { Container, Header, List, Comment, Button } from "semantic-ui-react";

export const UsersPost = (props) => {
  const paramsId = props.location.id;
  const history = useHistory();
  let [posts, setPosts] = useState({});
  let [showComments, setShowComments] = useState(true);
  let [showCommentsList, setShowCommentsList] = useState(false);
  let [commentList, setCommentList] = useState([]);

  const getUserDetails = () => {
    UsersService.getUsersPost(paramsId)
      .then((res) => {
        posts = res;
       
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const getComments = (postId) => {
    setShowComments(false);
    setShowCommentsList(true);
    UsersService.getUsersComments(postId)
      .then((res) => {
        commentList = res;
       
        setCommentList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const hideComments = () => {
    setShowComments(true);
    setShowCommentsList(false);
  };
  return (
    <div className="w3-container" style={{ paddingTop: "15px" }}>
      <Header as="h3" style={{ textAlign: "center" }}>Users Posts</Header>
      <Button
        primary
        onClick={() => history.push("/users/" + paramsId + "/page")}
      >
        Back
      </Button>
      <button> </button>
      <br />
      <Container style={{ margin: 20 }}>
        {posts.length > 0
          ? posts.map((item, index) => (
              <List bulleted key={index}>
                <List.Item as="a" content={item.title} />
                <p>{item.body}</p>
                {showComments ? (
                  <Button primary onClick={() => getComments(item.id)}>
                    View Comment
                  </Button>
                ) : (
                  <Button primary onClick={() => hideComments()}>
                    Hide Comment
                  </Button>
                )}
                {showCommentsList ? (
                  <UsersComments comments={commentList} />
                ) : (
                  ""
                )}
              </List>
            ))
          : ""}
      </Container>
    </div>
  );
};

const UsersComments = (props) => {

  return (
    <>
      <Comment.Group>
        {props.comments.length > 0
          ? props.comments.map((item, index) => (
              <Comment key={index}>
                <Comment.Avatar />
                <Comment.Content>
                  <Comment.Author as="a">{item.name}</Comment.Author>
                  <Comment.Metadata>
                    <div> Email :{item.email}</div>
                  </Comment.Metadata>
                  <Comment.Text>{item.body}</Comment.Text>
                </Comment.Content>
              </Comment>
            ))
          : ""}
      </Comment.Group>
    </>
  );
};
