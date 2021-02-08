// Fetching data from api using useEffect and useState Hook
// No grid component 

import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function DataFetchingOne() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="grid-container">
          <div className="row">
            <div className="row-3">
            <header className="row">
                 <h3>List of Posts </h3>
              </header>
                {posts.length
                  ? posts.map((post) => (
                    <div key={post.id}>
                      <div class="row">
                        <div className="first-column">{post.id}</div>
                        <div className="second-column">{post.title}</div>
                        <div className="third-column">{post.body}</div>
                      </div>
                      <hr className="line" />
                    </div>
                  ))
                : null}
             <footer className='center'>Footer content</footer>
            </div>
          </div>
         
        </div>
     
      )}
    
    </div>
  
  );
}

export default DataFetchingOne;
