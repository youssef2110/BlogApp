import React from 'react';
import {Container,Button} from 'react-bootstrap';
import {useLocation, useHistory, Redirect} from 'react-router';
import '../App.css';

function PageDetails() {
    const post = useLocation().post;
    const history = useHistory();
    if(post === undefined) {
        return (<Redirect to="/" />)
    }
    else{
        return (
            <div className="Detail">
                <Button onClick={() => history.goBack()} variant="outline-secondary"> Back </Button>
                <Container>
                    <h1 className="Detail-title" >{post.title}</h1>
                    <p className="Detail-para">{post.body}</p>
                </Container>
            </div>
        )
    }
    
}

export default PageDetails
