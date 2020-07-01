import React from "react";

export default function Post(props) {
   let post = <p>Please select a Post!!!</p>;
   post = (
      <article className="Post" onClick={props.clicked}>
         <h1 className="Title">{props.title}</h1>
         <div className="Info">
            <div className="Author">{props.author}</div>
         </div>
      </article>
   );

   return post;
}
