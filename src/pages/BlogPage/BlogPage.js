import React, { useState, useEffect } from "react";
import SingleBlogForPage from "../../components/SingleBlogForPage/SingleBlogForPage";
import "./BlogPage.css";
import axios from 'axios';
import DataLoadingMsg from "../../components/DataLoadingMsg/DataLoadingMsg";

function BlogPage() {

    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        axios.get("https://coronavirus-smartable.p.rapidapi.com/news/v1/IN/", {
                "headers": {
                    "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
                    "x-rapidapi-key": "ec593f85ebmshbb5d054f70387d5p174d24jsn4c6aff3468a0"
                }
            })
            .then(resp => {
                console.log(resp.data)
                setBlogData(resp.data.news)
                console.log(resp.data.news)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(blogData)
    console.log(blogData.length)


    return (
        <div className="blog-page">
            <div className="container">
                <div className="cards">
                    {blogData.length > 0 ?
                        blogData.map((singleBlog, index)=> {
                            return(
                                <SingleBlogForPage key ={index}
                                                   title={singleBlog.title}
                                                   webUrl={singleBlog.webUrl}
                                                   excerpt={singleBlog.excerpt}
                                                   provider={singleBlog.provider} />
                            )
                        })
                        :
                        <DataLoadingMsg />
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogPage