import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, desc, ImageUrl, newsUrl, author, source, date } = this.props;
    return (
      <div className="card my-3 d-flex">
        <div style={{left: "10%",
    top: "2%",
    position: "absolute"}}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>

        </div>
        <img src={ImageUrl ? ImageUrl : "https://www.innovationnewsnetwork.com/wp-content/uploads/2022/11/%C2%A9-iStocksakkmesterke-899006948-1024x576.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank ' className="btn btn-sm btn-danger">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
