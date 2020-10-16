import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchPostsAction,
  deletePostAction,
  toggleAddModalAction,
  tryEditAction,
  fetchSearchAction,
} from "../redux/actions/postActions";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddPost from "./Addpost";
import EditPost from "./EditPost";
import AlertMessage from "./AlertMessage";
import "../App.css";

function Home({
  posts,
  fetchPosts,
  deletePost,
  toggleAddModal,
  tryEdit,
  fetchSearch,
  search,
}) {
  // before rendering
  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    <div className="App">
      <h2 className="App-title">My blog</h2>
      <div className="App-header">
        <div className="App-form">
          <InputGroup>
            <FormControl
              placeholder="Type in order to search"
              aria-describedby="basic-addon2"
              value={search}
              onChange={(e) => fetchSearch(e.target.value)}
            />
            <InputGroup.Append>
              <Button onClick={() => toggleAddModal(true)} variant="success">
                New post
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
      <AlertMessage />
      <AddPost />
      <EditPost />
      <div className="App-Cards">
        {posts
          .filter((post) => post.title.includes(search))
          .map((filteredPost) => (
            <Card
              key={filteredPost.id}
              bg="success"
              text="light"
              style={{ width: "18rem", margin: "5px" }}
            >
              <Card.Body>
                <Card.Title
                  style={{ font: "25px solid Tahoma", textAlign: "center" }}
                >
                  {filteredPost.title}
                </Card.Title>
                <Card.Text
                  style={{
                    font: "15px solid Tahoma",
                    width: 250,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {filteredPost.body}
                </Card.Text>
                <div style={{ textAlign: "right", marginBottom: 20 }}>
                  <Link
                    to={{
                      pathname: `/Post/${filteredPost.id}`,
                      post: filteredPost,
                    }}
                  >
                    Learn more
                  </Link>
                </div>
                <Button
                  onClick={() => {
                    tryEdit(
                      true,
                      filteredPost.id,
                      filteredPost.title,
                      filteredPost.body
                    );
                  }}
                  variant="warning"
                  block
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    deletePost(filteredPost.id);
                  }}
                  variant="danger"
                  block
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  toggleAddModal: PropTypes.func.isRequired,
  tryEdit: PropTypes.func.isRequired,
  fetchSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  search: state.search.search,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchPosts: fetchPostsAction,
      toggleAddModal: toggleAddModalAction,
      tryEdit: tryEditAction,
      deletePost: deletePostAction,
      fetchSearch: fetchSearchAction,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Home);
