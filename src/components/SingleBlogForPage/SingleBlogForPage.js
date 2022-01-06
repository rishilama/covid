import React from 'react'


function SingleBlogForPage({ webUrl, title, excerpt, provider }) {
    return (
        <>
            <a href={webUrl} target="_blank" rel="noreferrer noopener" className="new-card">
                <div className="new-card__card-text">
                    <h1 className="new__card-heading">{title}</h1>
                    <p className="new__card-subtitle">{excerpt}</p>
                    <div className="provider">
                        <p>{provider.domain}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default SingleBlogForPage
