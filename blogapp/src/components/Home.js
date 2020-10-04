import React,{useEffect,useState} from 'react';
import {Button,InputGroup,FormControl,Card,Modal,Form} from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

export default function Home() {
    

  //states
  const [Show, setShow] = useState(false);  
  const [Show2, setShow2] = useState(false);  
  const [Show3, setShow3] = useState(false);  
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [title2, setTitle2] = useState('');
  const [body2, setBody2] = useState('');
  const [id2, setId2] = useState('');
  const [title3, setTitle3] = useState('');
  const [body3, setBody3] = useState('');
  const [ListPost, setListPost] = useState([]);


  // before rendering
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        setListPost(res.data.slice(0,16));
      }).catch(error => {
        console.log(error);
      });
  },[]);

  //functions
  const AddPost = (title,body)=>{
    var id = Math.floor((Math.random() * 10000) + 1);
    var post = {title, body, id};
    ListPost.push(post);
    setShow(false);
  }
  const DeletePost = (id)=>{
    setListPost(ListPost.filter((post , index) => post.id !== id ));
  }
  const EditPost = (title,body,id)=>{
    for(var i=0;i<ListPost.length;i++){
      if(ListPost[i].id === id){
        ListPost[i] = {title:title, body:body, id:id};
        break;
      }
    }
    setShow2(false);
  }

  const setModal = (title,body,id)=>{
    setShow2(true);
    setTitle2(title);
    setBody2(body);
    setId2(id);
  }

  const setModal2 = (title,body)=>{
    setShow3(true);
    setTitle3(title);
    setBody3(body);
  }

    return (
        <div className="App">
      <h2 className="App-title">My blog</h2>
      <div className="App-header">
        <div className="App-form">
          <InputGroup >
            <FormControl
              placeholder="Type in order to search"
              aria-describedby="basic-addon2"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <InputGroup.Append>
              <Button onClick={() => setShow(true)} variant="success">New post</Button>
            </InputGroup.Append>
          </InputGroup>               
        </div>
      </div>
      <Modal
        size="lg"
        show={Show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Ajouter un post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title Post</Form.Label>
            <Form.Control value={title}
              onChange={e => setTitle(e.target.value)} 
              type="text" 
              placeholder="Enter your title" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description Post</Form.Label>
            <Form.Control value={body}
              onChange={e => setBody(e.target.value)} 
              as="textarea" 
              placeholder="Enter your description"
              rows={3} />
          </Form.Group>
          <Button onClick={() => {AddPost(title,body)}} variant="success" disabled={!title || !body}>
            Submit
          </Button>
        </Form>
        </Modal.Body>
      </Modal>
      <div className="App-Cards">
        {ListPost.filter(post => post.title.includes(search)).map(filteredPost => (
            <Card key={filteredPost.id} bg='success' text='light' style={{ width: '18rem', margin:'5px' }}>
              <Card.Body>
                <Card.Title style={{ font : '25px solid Tahoma', textAlign: 'center' }}>{filteredPost.title}</Card.Title>
                <Card.Text style={{ font : '15px solid Tahoma',width: 250, whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {filteredPost.body}
                </Card.Text>
                <div style={{ textAlign: 'right' ,marginBottom: 20}}>
                  <p style={{ cursor: 'pointer', textDecoration:'underline' }} onClick={() => {setModal2(filteredPost.title, filteredPost.body)}}>Learn More</p>
                </div>
                <Button onClick={() => {setModal(filteredPost.title, filteredPost.body, filteredPost.id)}} variant="warning" block>Edit</Button>
                <Button onClick={() => {DeletePost(filteredPost.id)}} variant="danger" block>Delete</Button>
              </Card.Body>
            </Card>
        ))}
      </div>
      <Modal
        size="lg"
        show={Show2}
        onHide={() => setShow2(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit le post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title Post</Form.Label>
            <Form.Control value={title2}
              onChange={e => setTitle2(e.target.value)} 
              type="text" 
              placeholder="Enter your title" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description Post</Form.Label>
            <Form.Control value={body2}
              onChange={e => setBody2(e.target.value)} 
              as="textarea" 
              placeholder="Enter your description"
              rows={3} />
          </Form.Group>
          <Button onClick={() => {EditPost(title2,body2,id2)}} variant="success" disabled={!title2 || !body2}>
            Edit
          </Button>
        </Form>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={Show3}
        onHide={() => setShow3(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1>{title3}</h1>
            <p>{body3}</p>
        </Modal.Body>
      </Modal>
    </div>
    )
}
