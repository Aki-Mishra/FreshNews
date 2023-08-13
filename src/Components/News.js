import React, { useEffect, useState } from "react";
import NewsItem from './NewsItem'
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [article, setArticle] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(null);
    const [loading, setLoading] = useState(false)



    const fetchData = async (props) => {
        // setLoading(true)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&pageSize=${props.pageSize}&category=${props.category}&page=1`).then(async (res) => {
            return res.json()
        })




        console.log(data)
        setArticle(data.articles)
        setTotalResults(data.totalResults)
    }
    useEffect(()=>{

        fetchData(props);
    },[])
    const fetchMoreData = async () => {
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&pageSize=${props.pageSize}&category=${props.category}&page=${page + 1}`).then(async (res) => {
            setPage(page + 1)
            return res.json()
        })
        console.log(data)
        setArticle(article.concat(data.articles))
       

    }


    return (
        <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article < totalResults}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }

        >
            <div className="container my-5">
                <div><p className="h3 text-center" style={{marginTop: "90px"}}>Fresh News - Today Top Headlines</p></div>
                <div className="row my-3">
                    {article.map((elem, index) => {
                        return (
                            <div className="col-4 my-4" key={index}>
                                <NewsItem title={elem.title !== undefined ? elem.title.slice(0, 100) : null} description={elem.description} newsUrl={elem.url} imageUrl={elem.urlToImage} source={elem.source.name} author={elem.author} date={new Date(elem.publishedAt).toGMTString()} />
                            </div>)
                    })}
                </div>

            </div>
        </InfiniteScroll >

    )

}

News.defaultProps = {
    pageSize: 10
}
News.propTypes = {

    pageSize: PropTypes.number,
    category: PropTypes.string,
}