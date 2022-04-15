import React, { useState, useEffect } from 'react'
import styles from '../../styles/Blog.module.css'
import { useRouter } from 'next/router'
const Slug = () => {

  const [Blog, setBlog] = useState()
  const router = useRouter();
  // console.log(router.query)


  // normal data featch 
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json()
    }).then((parsedData) => {
      //  console.log(parsedData)
      setBlog(parsedData);
    })
  }, [router.isReady])

  const sanitizedData = (c) => {
    return { __html: c }
  }

  return (
    <>
      <div className={styles.main}>
        <h1> {Blog && Blog.title}</h1>
        <div className={styles.container}>

          <hr />
          {Blog && <div
            dangerouslySetInnerHTML={sanitizedData(Blog.content)}></div>}
          {/* { Blog && Blog.content} */}


        </div>
      </div>
    </>
  )
}

export default Slug