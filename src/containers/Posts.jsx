import React, { useEffect, useState } from "react";
import axios from "../axios";
import Post from "../components/Post";
import FullPost from "./FullPost";
import { Route } from "react-router-dom";

export default function Posts(props) {
   const [serverPosts, setServerPosts] = useState([]);
   const [selectedPostId, setSelectedPostId] = useState([]);
   const [error, setError] = useState(false);

   useEffect(() => {
      axios
         .get("/posts")
         .then(res => {
            const posts = res.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
               return {
                  ...post,
                  author: "Maciej",
               };
            });
            setServerPosts(updatedPosts);
         })
         .catch(error => {
            console.error(error);
            // setError(true);
         });
   }, []);
   

   const postSelectedHandler = id => {
      //   setSelectedPostId(id);
      props.history.push({ pathname: "/posts/" + id });
   };

   let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
   if (!error) {
      posts = serverPosts.map(post => {
         return (
            // <Link to={"/posts" + post.id} key={post.id}>
            <Post
               key={post.id}
               title={post.title}
               author={post.author}
               clicked={() => postSelectedHandler(post.id)}
            />
            // </Link>
         );
      });
   }

   return (
      <div>
         <section className="Posts">{posts}</section>
         <Route path={props.match.url + '/:id'} exact component={FullPost} />
      </div>
   );
}
