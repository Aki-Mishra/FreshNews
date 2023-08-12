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
        setLoading(true)
        // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&pageSize=${props.pageSize}&category=${props.category}&page=1`).then(async (res) => {
        //     return res.json()
        // })




        let data = {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": "NDTV Sports Desk",
                    "title": "Joe Root Surpasses Rahul Dravid, Brian Lara; Equals Sachin Tendulkar For Historic Feat - NDTV Sports",
                    "description": "In the ongoing Ashes, Joe Root has scored 412 runs with the help of one century and two fifties.",
                    "url": "https://sports.ndtv.com/ashes-2023/joe-root-surpasses-rahul-dravid-brian-lara-equals-sachin-tendulkar-for-historic-feat-4252453",
                    "urlToImage": "https://c.ndtvimg.com/2023-07/1oadkppo_joe-root-afp_625x300_30_July_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
                    "publishedAt": "2023-07-30T08:52:19Z",
                    "content": "England batter Joe Root on Saturday achieved a huge milestone during Day 3 of the ongoing fifth and final Ashes Test against Australia at The Oval. Root continued his rich vein of form as he put Engl… [+1301 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "Watch: Chahal throws death stare at Jadeja; all-rounder's reaction is priceless - Hindustan Times",
                    "description": "Ravindra Jadeja and Yuzvendra Chahal shared a rather unusual moment in the dressing room during the 2nd West Indies ODI. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/watch-chahal-charges-at-jadeja-throws-death-stare-during-2nd-odi-all-rounder-reacts-with-totally-unexpected-gesture-101690702727861.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/30/1600x900/jadeja_chahal_1690705146638_1690705150439.png",
                    "publishedAt": "2023-07-30T08:21:34Z",
                    "content": "Team India faced a heavy defeat to West Indies in the second ODI of the three-match series in Barbados, enduring a poor batting effort after Shai Hope opted to bowl. The Indian team management left t… [+2129 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "💥 MORE THAN A VICTORY! | EXCLUSIVE CONTENT FROM THE BIGGEST GAME (goals included) 🔥 - FC Barcelona",
                    "description": "After Miami and Las Vegas we can now add the name of Dallas to the list as Barça took their third consecutive Clásico victory in the USA thanks to a 3-0 vict...",
                    "url": "https://www.youtube.com/watch?v=tLfH9ZdUnj4",
                    "urlToImage": "https://i.ytimg.com/vi/tLfH9ZdUnj4/maxresdefault.jpg",
                    "publishedAt": "2023-07-30T07:46:12Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": "Press Trust of India",
                    "title": "Ajinkya Rahane Take U-Turn On County Stint, Decides To Take Break From Cricket - NDTV Sports",
                    "description": "Ajinkya Rahane was to join the county club in June but his arrival was pushed back due to increased international commitments.",
                    "url": "https://sports.ndtv.com/cricket/rahane-pulls-out-of-county-stint-with-leicestershire-as-he-wants-break-after-international-engagements-4252751",
                    "urlToImage": "https://c.ndtvimg.com/2023-07/45spifq8_ajinkya-rahane-twitter-pc_650x300_11_July_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
                    "publishedAt": "2023-07-30T07:39:00Z",
                    "content": "Senior India batter Ajinkya Rahane will not join English county side Leicestershire as planned earlier as he wants a break from cricket after hectic international engagements, the club said. The 35-y… [+1611 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "Rinku Singh credits India selection for Asian Games to special IPL 2023 knock - Hindustan Times",
                    "description": "Rinku Singh credited his India selection for the upcoming 2023 Asian Games to a special IPL 2023 knock for KKR. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/my-life-changed-after-those-five-sixes-rinku-singh-credits-india-selection-for-asian-games-to-special-ipl-2023-knock-101690700797912.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/30/1600x900/RINKU_SINGH1_1681053692744_1690700933643.webp",
                    "publishedAt": "2023-07-30T07:12:43Z",
                    "content": "The 2023 Asian Games will have men's cricket as an event, and the sport will be played in the T20 format. The matches will take place from September 28-October 8, and will be played at the Zhejiang U… [+2451 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Forbes"
                    },
                    "author": "Sam Pilger",
                    "title": "Manchester United Agree Deal To Sign Rasmus Hojlund - Forbes",
                    "description": "The Danish striker is set to move to Old Trafford from the Italian club Atalanta.",
                    "url": "https://www.forbes.com/sites/sampilger/2023/07/30/manchester-united-agree-deal-to-sign-rasmus-hojlund/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64c608693e9ca5472f03e790/0x0.jpg?format=jpg&crop=2818,1586,x0,y4,safe&width=1200",
                    "publishedAt": "2023-07-30T07:03:32Z",
                    "content": "Rasmus Hojlund of Atalanta BC looks on during the Serie A match between SS Lazio and Atalanta BC at ... [+] Stadio Olimpico, Rome, Italy on 24 February 2023. (Photo by Giuseppe Maffia/NurPhoto via Ge… [+3243 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "Watch: Kohli's blockbuster reaction after young fan gifts bracelet goes viral - Hindustan Times",
                    "description": "Despite being rested for the 2nd ODI, Kohli was a busy man as he was spotted spending time with fans, taking selfies and signing autographs. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/watch-virat-kohli-blockbuster-reaction-after-young-fan-gifts-hand-made-bracelet-during-2nd-wi-odi-goes-viral-101690697587558.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/30/1600x900/kohli_fan_brace_1690698080906_1690698091207.jpg",
                    "publishedAt": "2023-07-30T06:44:12Z",
                    "content": "After relinquishing his No.4 spot in the first match of the ODI series against West Indies on Thursday, Virat Kohli was rested for the second game at the Kensington Oval in Barbados on Saturday for s… [+1775 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sporting News"
                    },
                    "author": null,
                    "title": "WATCH: Ousmane Dembele scores El Clasico screamer for Barcelona against Real Madrid - Goal.com",
                    "description": "Get all the latest Soccer news, highlights, scores, schedules, standings and more from Sporting News Canada.",
                    "url": "https://www.sportingnews.com/ca/soccer",
                    "urlToImage": "https://static.sportingnews.com/1.34.4.1/themes/custom/tsn/logo.jpg",
                    "publishedAt": "2023-07-30T06:26:11Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "PSG to send Kylian Mbappe on one-year loan deal to Premier League: Report - Hindustan Times",
                    "description": "PSG are reportedly planning to send Kylian Mbappe on a one-year loan deal to the Premier League. | Football News",
                    "url": "https://www.hindustantimes.com/sports/football/psg-to-send-kylian-mbappe-on-one-year-loan-deal-to-premier-league-report-101690696407693.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/30/1600x900/Soccer-Mbappe-Saudi-Bid-1_1690696468662_1690696524513.jpg",
                    "publishedAt": "2023-07-30T05:58:52Z",
                    "content": "Kylian Mbappe shocked the PSG board recently, when he revealed that he would not be signing a 12-month contract extension, which would see him depart as a free agent after the 2023-24 season. The Fre… [+2624 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "'These cricketers think they know everything': Kapil Dev on Gavaskar's 'ego' dig - Hindustan Times",
                    "description": "Kapil explained that while it shows confidence, the negative side to it is that these present day India batters feel \"they know everything\" | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/these-cricketers-think-they-know-everything-kapil-dev-bombastic-response-to-sunil-gavaskar-ego-dig-at-india-batters-101690694521678.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/30/1600x900/kapil_gavaskar_1690695129153_1690695144133.jpg",
                    "publishedAt": "2023-07-30T05:58:48Z",
                    "content": "Like in life, one goes through the ups and downs in professional phase. In sports, one day you embrace glory and the other day you tend to lose form. Athletes over the years, in moments of their toug… [+2551 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "How Yuvraj Singh's six sixes sparked Stuart Broad's evolution into a world class bowler | Cricket News - Times of India - IndiaTimes",
                    "description": "Cricket News: There have been quite a few former Indian players who on record have said that Stuart Broad will always be remembered for the six sixes he was hit by",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/ashes/how-yuvraj-singhs-six-sixes-sparked-stuart-broads-evolution-into-a-world-class-bowler/articleshow/102245583.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-102245548,width-1070,height-580,imgsize-44246,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-07-30T05:56:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zoom"
                    },
                    "author": "TN Sports Desk",
                    "title": "Jaffer Feels 29-year-old All-Rounder Who Isn't Pandya 'Will Play A Bigger Role In WC' - Times Now",
                    "description": "Waism Jaffer has batted for the inclusion of a 29-year-old star all-rounder, who is not Hardik Pandya, in India's playing XI ahead of the ICC Men's ODI World Cup 2023. According to Jaffer, the 29-year-old cricketer, who was part of the MS Dhoni-led side in th…",
                    "url": "https://www.timesnownews.com/sports/cricket/jaffer-feels-29-year-old-all-rounder-who-isnt-pandya-will-play-a-bigger-role-in-wc-article-102245305",
                    "urlToImage": "https://static.tnn.in/thumb/msid-102245305,updatedat-1690696054100,width-1280,height-720,resizemode-75/102245305.jpg",
                    "publishedAt": "2023-07-30T05:54:00Z",
                    "content": "Yashasvi Jaiswal &amp; Ashwin OUT, Sanju Samson IN: Changes In India's ODI Team From Test Squad For WI Series"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Express"
                    },
                    "author": "Joe Krishnan",
                    "title": "Chelsea may have made Moises Caicedo blunder after signing 'Brighton's replacement' - Express",
                    "description": "COMMENT: Chelsea could well have shot themselves in the foot in their pursuit of Moises Caicedo after clinching a deal to sign one of Brighton's potential replacements.",
                    "url": "https://www.express.co.uk/sport/football/1796678/Chelsea-transfer-news-Moises-Caicedo-Brighton-Lesley-Ugochukwu",
                    "urlToImage": "https://cdn.images.express.co.uk/img/dynamic/67/1200x712/4882652.jpg?r=1690669860372",
                    "publishedAt": "2023-07-30T05:30:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "Stokes falls short of Rohit's incredible Test record, sets new Ashes benchmark - Hindustan Times",
                    "description": "Ben Stokes fell on 42 off 67 balls during the third day of the fifth Ashes Test. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/ben-stokes-falls-short-of-rohit-sharmas-incredible-test-record-while-eclipsing-kevin-pietersen-in-new-ashes-benchmark-101690671781991.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/29/1600x900/rohit_stokes_kp_1690673361539_1690673367794.jpg",
                    "publishedAt": "2023-07-30T04:58:13Z",
                    "content": "Ben Stokes promoted himself to No.3 on Day 3 of the fifth Ashes Test. Moeen Ali was unable to bat in that position due to injury and the fact that he hadn't fielded for much of the Australian innings… [+2284 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "Biju Babu Cyriac",
                    "title": "Junior shooters break 'code of conduct' in Korea hotel - IndiaTimes",
                    "description": "More sports News: India's shooting contingent, which competed at the recent Junior World Championships at Changwon in South Korea, got into trouble after a few shooters",
                    "url": "https://timesofindia.indiatimes.com/sports/more-sports/shooting/junior-shooters-break-code-of-conduct-in-korea-hotel/articleshow/102244666.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-102244652,width-1070,height-580,imgsize-29846,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-07-30T04:56:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "'About to explode': Ponting, Mark Taylor left fuming at stubborn Australia ploy - Hindustan Times",
                    "description": "Ricky Ponting and Mark Taylor, who were fuming at the team's ploy, admitted that the visitors were put off line during England's opening stand itself. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/about-to-explode-ricky-ponting-mark-taylor-left-fuming-at-stubborn-aus-ploy-after-copping-bazball-blitz-5th-ashes-test-101690689309796.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/30/1600x900/ponting_ploy_1690689973281_1690689988051.jpg",
                    "publishedAt": "2023-07-30T04:54:50Z",
                    "content": "Just two days back, Australia were the happier camp at the Kennington Oval after folding England for just 283 runs on the first afternoon of the fifth and final Test. Early predictions of a win by al… [+3355 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "Siddharth Saxena",
                    "title": "Red-faced AIFF says senior players' inclusion rests on their availability | Football News - Times of India - IndiaTimes",
                    "description": "Football News: With the All India Football Federation (AIFF) scampering to control the damage following their president Kalyan Chaubey's admission of overlooking the",
                    "url": "https://timesofindia.indiatimes.com/sports/football/top-stories/red-faced-aiff-says-senior-players-inclusion-rests-on-their-availability/articleshow/102244610.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-102244593,width-1070,height-580,imgsize-22042,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-07-30T04:53:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "Sportstar",
                    "title": "UFC 291 HIGHLIGHTS, Poirier vs Gaethje 2: Gaethje knocks Poirier out to clinch BMF title; Pereira wins via split decision - Sportstar",
                    "description": null,
                    "url": "https://sportstar.thehindu.com/other-sports/ufc-291-dustin-poirier-vs-justin-gaethje-2-live-streaming-updates-bmf-title-fight-highlights/article67136702.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-07-30T04:38:26Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Iftwc.com"
                    },
                    "author": "https://www.facebook.com/sayan.howrah",
                    "title": "The Indian Super League And Its Ultras - IFTWC",
                    "description": "What makes football the most beautiful sport in the world? A goal-saving last-ditch tackle? a defence-splitting pass? or players dribbling past defenders with the ball glued to their feet? Definitely, but what sets football apart as a sport is the passion tha…",
                    "url": "https://iftwc.com/the-indian-super-league-and-its-ultras/",
                    "urlToImage": "https://iftwc.com/wp-content/uploads/2023/07/20230729_211417-min-1024x576.jpg",
                    "publishedAt": "2023-07-30T04:30:00Z",
                    "content": "What makes football the most beautiful sport in the world? A goal-saving last-ditch tackle? A defence-splitting pass? Or players dribbling past defenders with the ball glued to their feet? Definitely… [+16405 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "ICC World Cup 2023 online tickets sales likely to begin by August 10: Reports - Moneycontrol",
                    "description": "The 2023 World Cup is set to feature 48 games taking place in 10 cities from October 5 to November 19. The opening game in Ahmedabad will see England and New Zealand facing off in an exciting encounter.",
                    "url": "https://www.moneycontrol.com/news/trends/sports/icc-world-cup-2023-online-tickets-sales-likely-to-begin-by-august-10-reports-11058691.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/02/ICC-Cricket-World-Cup-770x433.jpg",
                    "publishedAt": "2023-07-30T04:07:37Z",
                    "content": "The Board of Control for Cricket in India (BCCI) is likely to start online sale of tickets of the ICC World Cup from August 10. It has been reported that the cricket watchdog has sought suggestions f… [+1622 chars]"
                }
            ]
        }

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