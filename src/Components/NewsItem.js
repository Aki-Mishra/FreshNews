import React, { Component } from "react";
import { PropTypes } from "prop-types";

export default function NawsItem(props) {
    const { title, description, newsUrl, imageUrl, source, author, date } = props;
    return (
        <div className="card" style={{ width: "18rem" }}>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "83% " }}>
                {source}
                <span className="visually-hidden">unread messages</span>
            </span>
            <img src={imageUrl} className="card-img-top" alt=" not available" style={{ height: "161px" }} />
            <div className="card-body">
                <h5 className="card-title text-start"  ><span style={{ display: 'block', height: '100px', overflow: "hidden" }}>{title}</span> ...</h5>
                <p className="card-text text-start text-wrap text-break" style={{ height: "100px", overflow: "hidden" }} >{!description ? "discription not avialbale" : description + "..."}</p>
                <blockquote className="blockquote mb-0 ">
                    <footer className="blockquote-footer my-1 fs-6" style={{ height: "55px" }}>on {date} <cite title="Source Title">by <span className="fw-semibold text-black">{!author ? "unknown" : author}</span></cite></footer>
                </blockquote>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark
                ">Read more</a>
            </div>

        </div>
    )
}

NawsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    newsUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    source: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string
}