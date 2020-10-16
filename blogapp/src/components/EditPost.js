import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  toggleEditModalAction,
  editPostAction,
} from "../redux/actions/postActions";
import { Formik } from "formik";
import { Button, Modal, Form } from "react-bootstrap";

function EditPost({ editmodal, toggleModal, edit, postEdited }) {
  const initialValues = {
    id: postEdited.id,
    title: postEdited.title,
    body: postEdited.body,
  };
  return (
    <>
      <Modal
        size="lg"
        show={editmodal}
        onHide={() => toggleModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit le post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              const post = {
                id: values.id,
                title: values.title,
                body: values.body,
              };
              edit(post, post.id);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Title Post</Form.Label>
                  <Form.Control
                    value={values.title}
                    name="title"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your title"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description Post</Form.Label>
                  <Form.Control
                    value={values.body}
                    name="body"
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Enter your description"
                    rows={3}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="success"
                  disabled={!values.title || !values.body}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

EditPost.propTypes = {
  editmodal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  postEdited: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  editmodal: state.post.Editmodal,
  postEdited: state.post.postEdited,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleModal: toggleEditModalAction,
      edit: editPostAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
