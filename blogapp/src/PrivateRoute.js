import React from 'react'
import PropTypes from "prop-types";
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

function PrivateRoute({component: Component, isConnected, rest}) {
    return (
        <div>
            <Route
                {...rest}
                render={props =>
                    isConnected ? (
                        <Component {...props} />
                    ) : (
                        <>
                            <Redirect
                                to={{
                                    pathname: '/',
                                }}
                            />
                        </>
                    )
                }
            />
        </div>
    )
}
PrivateRoute.propTypes = {
    isConnected: PropTypes.bool.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    isConnected: state.user.isConnected,
  });

export default connect(mapStateToProps,null)(PrivateRoute)
