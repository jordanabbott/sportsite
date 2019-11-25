import React from 'react'
import {withRouteData} from "react-static";
import {Link} from "@reach/router";


import request from "graphql-request";

function excerpt(str)
{
 return str.substring(0,300)+ "...";
}


export default withRouteData(
    ({posts}) => console.log({posts}) ||
        (

            <div className="container">
                {posts.map(post =>
                    (

                        <div className="card">

                        <Link key={post.id} to={`/post/${post.id}`} classname={"card"}>

                               <h1>
                                   {post.title}
                               </h1>
                            <div className="post">
                                <img
                                    alt={post.title}
                                    src={`https://media.graphcms.com/${post.image.handle}`}
                                    className={"card-img"}
                                    align="left"
                                />



                                {excerpt(post.content)}
                            </div>
                        </Link>



                            <div className="postauthor">


                            <p>{post.author.name}</p>


                            {post.tags.map(tag=> (
                                <span className="card-tag" key={tag}>{tag}</span>

                            ))}

                            </div>




                        </div>


                    ))}


            </div>
        )
);
