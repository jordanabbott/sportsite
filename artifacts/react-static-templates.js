

import React from 'react'
import universal, { setHasBabelPlugin } from 'C:/Users/Jordan/sportsite/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('C:/Users/Jordan/sportsite/src/pages/404.js'), universalOptions)
      t_0.template = 'C:/Users/Jordan/sportsite/src/pages/404.js'
      
const t_1 = universal(import('C:/Users/Jordan/sportsite/src/pages/about.js'), universalOptions)
      t_1.template = 'C:/Users/Jordan/sportsite/src/pages/about.js'
      
const t_2 = universal(import('C:/Users/Jordan/sportsite/src/pages/blog.js'), universalOptions)
      t_2.template = 'C:/Users/Jordan/sportsite/src/pages/blog.js'
      
const t_3 = universal(import('C:/Users/Jordan/sportsite/src/pages/index.js'), universalOptions)
      t_3.template = 'C:/Users/Jordan/sportsite/src/pages/index.js'
      
const t_4 = universal(import('C:/Users/Jordan/sportsite/src/pages/post.js'), universalOptions)
      t_4.template = 'C:/Users/Jordan/sportsite/src/pages/post.js'
      
const t_5 = universal(import('C:/Users/Jordan/sportsite/src/pages/tag.js'), universalOptions)
      t_5.template = 'C:/Users/Jordan/sportsite/src/pages/tag.js'
      
const t_6 = universal(import('C:/Users/Jordan/sportsite/src/pages/post'), universalOptions)
      t_6.template = 'C:/Users/Jordan/sportsite/src/pages/post'
      

// Template Map
export default {
  'C:/Users/Jordan/sportsite/src/pages/404.js': t_0,
'C:/Users/Jordan/sportsite/src/pages/about.js': t_1,
'C:/Users/Jordan/sportsite/src/pages/blog.js': t_2,
'C:/Users/Jordan/sportsite/src/pages/index.js': t_3,
'C:/Users/Jordan/sportsite/src/pages/post.js': t_4,
'C:/Users/Jordan/sportsite/src/pages/tag.js': t_5,
'C:/Users/Jordan/sportsite/src/pages/post': t_6
}
// Not Found Template
export const notFoundTemplate = "C:/Users/Jordan/sportsite/src/pages/404.js"

