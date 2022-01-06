import { Link } from "react-router-dom"
import BlogSingle from "../BlogSingle/BlogSingle"


function Blogs({ blogData }) {
    return (
        <div className="blogs" id="news">
            <div className="container">
                <div className="blogs-section">
                    <h1 className="section__heading">
                        News
                    </h1>
                    <div className="card-container blog-card-container">
                        {blogData.map((singleBlogCard)=> {
                            return(
                                <BlogSingle key={singleBlogCard.id} {...singleBlogCard} />
                            )
                        })}
                    </div>
                </div>
                <div className="blog-btn">
                    <Link to="/news" className="button blog-button">
                        Read More &nbsp; <i className="fas fa-angle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Blogs
