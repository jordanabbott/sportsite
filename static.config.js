import path from 'path'
import {request} from "graphql-request";
process.env.NODE_ENV = 'production';
const endpoint = 'https://api-apeast.graphcms.com/v1/ck1hgzhht26qf01c00ef236v2/master';
const query = `{
  posts
  {
    id
    title
    content
    image
    {
      id
      handle
    }
    tags
    author
    {
      id
      name
    }
  }
  
  authors
  {
    id
    name
    bio
  }
}`;
export default {
  getRoutes: async () => {

    const {posts,authors} =  await request(endpoint,query);

    return [
      {
        path: '/',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/pages/post',
          getData: () => ({
            post,
          }),
        })),
      },



    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
