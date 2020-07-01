import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Posts from "./Posts";
import NewPost from "./NewPost";

export default function Blog(props) {
   return (
      <div className="Blog">
         <header>
            <nav>
               <ul>
                  <li>
                     <NavLink
                        to="/posts"
                        exact
                        activeClassName="my-active"
                        activeStyle={{
                           color: "#fa923f",
                           textDecoration: "underline",
                        }}
                     >
                        Posts
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to={{
                           pathname: "/new-post",
                           hash: "#submit",
                           search: "?quick-submit=true",
                        }}
                     >
                        New Post
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </header>
         {/* <Switch> */}
         <Route path="/new-post" component={NewPost} />
         <Route path="/posts" component={Posts} />
         {/* </Switch> */}
      </div>
   );
}
