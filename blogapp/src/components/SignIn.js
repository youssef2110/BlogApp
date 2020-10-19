import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {useHistory} from 'react-router';
import { emailChangeAction, tryLoginAction, passwordChangeAction } from '../redux/actions/userActions';
import { Button, Form } from "react-bootstrap";

function SignIn({email, password,emailError,passwordError, trylogin, emailChange, passwordChange}) {

    const history = useHistory();
    const handlerSubmit = (event) => {
        event.preventDefault();
        if(email === 't@t.com' && password === 'test'){
            trylogin(true);
        }
        else{
            trylogin(false);
        }
        setTimeout(() => {
            history.push('/home');
        }, 1000); 
    }
    return (
        <div className="App-sign">
            <Form onSubmit={(e) =>handlerSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>emailChange(e.target.value)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        <span style={{color:"red"}}>{emailError}</span>
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>passwordChange(e.target.value)} placeholder="Password" />
                    <Form.Text className="text-muted">
                        <span style={{color:"red"}}>{passwordError}</span>
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Se connecter
                </Button>
            </Form>
        </div>
    )
}

SignIn.propTypes = {
    trylogin: PropTypes.func.isRequired,
    emailChange: PropTypes.func.isRequired,
    passwordChange: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    email: state.user.email,
    emailError: state.user.emailError,
    password: state.user.password,
    passwordError: state.user.passwordError,
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        trylogin: tryLoginAction,
        emailChange: emailChangeAction,
        passwordChange: passwordChangeAction,
      },
      dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
