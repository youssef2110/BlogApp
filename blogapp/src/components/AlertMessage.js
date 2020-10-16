import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleAlertAction } from "../redux/actions/postActions";
import { Toast, Row, Col } from "react-bootstrap";
import "../App.css";

function AlertMessage({ toast, toggleAlert }) {
  return (
    <div className="Alert">
      {toast.show && (
        <Row>
          <Col xs={6}>
            <Toast
              style={{ backgroundColor: toast.color }}
              onClose={() => toggleAlert(false)}
              show={toast.show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong className="mr-auto">Post has been {toast.type}</strong>
              </Toast.Header>
            </Toast>
          </Col>
        </Row>
      )}
    </div>
  );
}
AlertMessage.propTypes = {
  toast: PropTypes.object.isRequired,
  toggleAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toast: state.post.toast,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleAlert: toggleAlertAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage);
