import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    toggleAddModalAction,
    addPostAction
} from '../redux/actions/postActions';
import {Formik} from 'formik';
import {Button,Modal,Form} from 'react-bootstrap';

function Addpost({
    modal,
    toggleModal,
    add
}) {

    const initialValues = {
        id : '' ,
        title : '' ,
        body : '',
    }
    return (
        <>
            <Modal
                size="lg"
                show={modal}
                onHide={() => toggleModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Ajouter un post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => {
                            const post = {
                                id :  Math.floor((Math.random() * 10000) + 1) ,
                                title : values.title ,
                                body : values.body,
                            };
                            add(post)
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit

                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Title Post</Form.Label>
                                    <Form.Control 
                                        value={values.title}
                                        name="title"
                                        onChange={handleChange}
                                        type="text" 
                                        placeholder="Enter your title" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description Post</Form.Label>
                                    <Form.Control 
                                        value={values.body}
                                        name="body"
                                        onChange={handleChange} 
                                        as="textarea" 
                                        placeholder="Enter your description"
                                        rows={3} />
                                </Form.Group>
                                <Button type="submit" variant="success" disabled={!values.title || !values.body}>
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

Addpost.propTypes = {
    modal: PropTypes.bool.isRequired,
    toggleModal : PropTypes.func.isRequired,
    add : PropTypes.func.isRequired,
  };
  
const mapStateToProps = state => ({
    modal: state.Addmodal,
});

const mapDispatchToProps = dispatch => 
bindActionCreators({
    toggleModal : toggleAddModalAction,
    add : addPostAction
}, dispatch,
);
  
export default connect(mapStateToProps, mapDispatchToProps)(Addpost);
