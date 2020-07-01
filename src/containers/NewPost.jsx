import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NewPost(props) {
   const [title, setTitle] = useState([]);
   const [content, setContent] = useState([]);
   const [author, setAuthor] = useState("Maciej");

   useEffect(() => {
      console.log(props);
   });

   const postDataHandler = () => {
      const post = {
         title: title,
         body: content,
         author: author,
      };

      axios.post("/posts", post).then(res => {
         console.log(res);
      });
   };

   return (
      <div className="newPost">
         <h1>Add a Post</h1>
         <label>Title</label>
         <input
            type="text"
            value={title}
            onChange={e => {
               setTitle(e.target.value);
            }}
         />
         <label>Content</label>
         <textarea
            rows="4"
            value={content}
            onChange={e => {
               setContent(e.target.value);
            }}
         />
         <label>Author</label>
         <select value={author} onChange={e => setAuthor(e.target.value)}>
            <option value="Jan">Jan</option>
            <option value="Maciej">Maciej</option>
         </select>
         <button onClick={postDataHandler}>Add Post</button>
      </div>
   );
}
