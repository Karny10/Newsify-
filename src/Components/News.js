import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps ={
    country:"in",
    PageSize:"9",
    category:"general"
  }
  static propTypes ={
    country:PropTypes.string,
    PageSize:PropTypes.string,
    category:PropTypes.string,
  }

  articles = []
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1

    }
    document.title=`${this.props.category}-Newsify`

  }
//  async updatenews(){
//   this.setState({loading:true});
//   let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.PageSize}`);
//   let parseddata = await data.json();
//   this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults,loading:false });
//  }




  async componentDidMount() {
    this.setState({loading:true});
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.PageSize}`);
    let parseddata = await data.json();
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults,loading:false });
    // this.updatenews();

  }
  HandleNextClick = async () => {
    console.log("Next")
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.PageSize))) {
      this.setState({loading:true});
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.PageSize}`);

      let parseddata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading:false
      }
      )
    }
    // this.setState({page:this.state.page+1})
    // this.updatenews();


  }
  HandlePrevClick = async () => {
    console.log("Previous")
    this.setState({loading:true});
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.PageSize}`);
    let parseddata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading:false
    }
    )
    // this.setState({page:this.state.page - 1})
    // this.updatenews();


  }

  render() {

    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'30px 0px',marginTop:"90px"}}>Newsify-Top {this.props.category} HeadLines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4 ' key={element.url}>
              <NewsItem title={element.title} desc={element.description} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">

        {!this.state.loading &&<button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.HandlePrevClick}>&larr; Previous</button>}
         {!this.state.loading &&  <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.PageSize)} className="btn btn-dark" onClick={this.HandleNextClick}>&rarr; Next</button>}
        </div>
      </div>
    )
  }
}

export default News
