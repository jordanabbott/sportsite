import React from "react";

import {withRouteData} from "react-static";

export default withRouteData(({post}) =>

<div className="container">
    <h1>{post.title}</h1>
    <img
        alt={post.title}
        src={`https://media.graphcms.com/${post.image.handle}`}
        className={"card-img"}
    />
    <p>{post.content}</p>

    <p>{post.author.name}</p>

    {post.tags.map(tag =>
        (
           <span className="card-tag">{tag}</span>
        ))}
    {/*{JSON.stringify(post)}*/}
</div>
)