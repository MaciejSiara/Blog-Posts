import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FullPost(props) {
   const [loadedPost, setLoadedPost] = useState(null);

   useEffect(() => {
      if (props.match.params.id) {
         if (!loadedPost || (loadedPost && loadedPost !== props.match.params.id)) {
            axios.get(`/posts/${props.match.params.id}`).then(res => {
               console.log(res);

               setLoadedPost(res);
            });
         }
      }
   }, [props.match.params.id]);

   const deletePostHandler = () => {
      axios.delete(`/posts/${props.id}`).then(res => {
      });
   };

   let post = <p style={{ textAlign: "center" }}>Please select a Post!!!</p>;

   if (props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
   }
   if (loadedPost) {
      post = (
         <div className="fullPost">
            <h1>{loadedPost.data.title}</h1>
            <p>{loadedPost.data.body}</p>
            <div className="edit">
               <button className="delete" onClick={deletePostHandler}>
                  Delete
               </button>
            </div>
         </div>
      );
   }

   return post;
}
