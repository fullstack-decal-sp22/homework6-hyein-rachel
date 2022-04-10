const express = require('express')
const port = 3002
const cors = require('cors');


const post1 = {
  id: 1,
  title: "Sheesh",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  comments: ["Test Comment", "Test Comment 2"],
}

const post2 = {
  id: 2,
  title: "Sheesh 2",
  body: "A whole secopnd post",
  comments: ["Low engagement gang"],
}

const post3 = {
  id: 3,
  title: "Sheesh 3",
  body: "A whole third post",
  comments: [],
}

let data= {1:post1, 2:post2, 3:post3}


const app = express();
app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
  res.send(Object.values(data))
})

app.post('/post', (req, res) => {
  if (data[req.body.id]) {
    throw new Error("Post exists!")
  }
  const newPost = {id:parseInt(req.body.id, 10), title: req.body.title, body: req.body.body, comments: []}
  data[req.body.id] = newPost
  res.send(newPost)
})

app.post('/post/:postId/comment', (req, res) => {
  const post = data[req.params.postId]
  post.comments = [...post.comments, req.body.newComment]
  res.send(post)
})

app.listen(port, () => {
  console.log(`Block Server listening at http://localhost:${port}`)
})

const [data, setData] = useState();

function app() {
  const [data, setData] = useState();

  const getPostsData = () => {
    axios
      .get('http://localhost:3002/posts') //THIS IS YOUR URL OF YOUR API
      .then((data) => setData(Feed.Post)) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
      .catch((error) => console.log(error)); //ERROR CATCHING IN CASE WE RECEIVE AN ERROR
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return <p>{data ? JSON.stringify(data[0]) : 'loading'}</p>;
}

axios
  .post(url, data) // `url` is the url to post to, `data` is the data to send in the body of the HTTP request
  .then((response) => console.log(response))
  .catch((error) => console.log(error));