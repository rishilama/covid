function BlogSingle({ cname, pic, heading,desc }) {
    return (
        <div className={`card blog-card ${cname}`}>
        {/* <div className="card blog-card blog-card-1"> */}
            <div className="blog-card-img">
                <img src={pic} alt="blog" className="blog__card-image" />
            </div>
            <div className="blog-card-text">
                <h4 className="blog__card-heading">{heading}</h4>
                <p className="blog__card-subtitle">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default BlogSingle
