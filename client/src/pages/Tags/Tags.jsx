import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript (javascript/js) and its various dialects/imlementations (axcluding actionscript).Please include all relevent tags on your question;"
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multiperpose programing languge. It is a design to be quick to learn, understand and use,and enforces a clean and uniform syntax"
    },{
        id: 3,
        tagName: "c#",
        tagDesc: "C# (pronounces 'see sharp') is a high lebel, statically typed, multi-paradgm programing languge developed by microsoft"
    },{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a high-lebel object oriented programming languge. Use this tag when you're having problems using or understanding the language itself."
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open sorce, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language orignally designed for server-side development"
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML (hypertext markup language) is a markup language for creating web pages and other purpose information to be displayed in a web browser"
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is a google's mobile oprating system, Used for programming or developing digital devices (smartphone, tablet, automobile, TVs, weare, Glass, IoT)"
    },{
        id: 8,
        tagName: "css",
        tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of html, XML document and SVG elements including colors, layout, fonts, and animation"
    },{
        id: 9,
        tagName: "reactjs",
        tagDesc: "React is a javascript library for building user interface. It use a declarative, component-based paradigm and aims to be both eficiant and flexible."
    },{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an even-based, non-blocking, asyncronous I/O runtime that uses google's v8 javascript engine and libuv library."
    }
]
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container 2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or lebel that categirize your question with other, similar questions.</p>
        <p className='tags-p'>Using the right tags make it easier for others to find and answer your question.</p>
        <div className="tags-list-container">
            {
                tagsList.map((tag) => (
                    <TagsList tag={tag} key={tagsList.id} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Tags
