import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from '../styles/Blog.module.css'

function Blog({ props }) {

  // console.log(props)
  const [allBlogData, setallBlogData] = useState([]);
  const [Count, setCount] = useState(3)

  // normal data featchj
  let i = 0;
  useEffect(() => {
    if (i == 0) {

      fetch("http://localhost:3000/api/blogs?count=3").then((a) => {
        return a.json()
      }).then((parsedData) => {
        //  console.log(parsedData)
        setallBlogData(parsedData);
      })
      i++;
    }
  }, [])

  const fetchData = () => {
    // console.log("hi")
    fetch(`http://localhost:3000/api/blogs?count=${Count + 2}`).then((a) => {
      setCount(Count + 2)
      return a.json()
    }).then((parsedData) => {
      //  console.log(parsedData)
      setallBlogData(parsedData);
    })
  }

  return (
    <main className={styles.main}>
      <div className="blogs">
        <div className={styles.blogitem}>

          <InfiniteScroll
            dataLength={allBlogData.length} //This is important field to render the next data
            next={fetchData}
            hasMore={12 != allBlogData.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }

          >
            {
              allBlogData.map((data) => {
                return (
                  <>
                    <Link href={`/blogpost/${data.slug}`} >
                      <h3>{data.title}</h3>
                    </Link>
                    <p>{data.metadesc}</p>
                    <Link href={`/blogpost/${data.slug}`} ><button className={styles.btn}>Read More</button></Link>
                  </>
                )
              })
            }
          </InfiniteScroll>




        </div>
      </div>
    </main>
  )
};

export default Blog;

