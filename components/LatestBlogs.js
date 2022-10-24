import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const LatestBlogs = (props) => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('/api/gettop')
            .then(res => res.json())
            .then(data => {
                setBlog(data);

            })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h2>Latest Blogs</h2>

                {
                    blog.map(blogItem => {
                        return (<>
                            <div key={blogItem.slug} className={styles.blogs}>
                                <div className="blogItem">
                                    <h3>{blogItem.title}</h3>
                                    <h6>{blogItem.date}</h6>
                                    <p>
                                        {blogItem.content.substring(0, 100)}...
                                    </p>
                                </div>
                                <Link href={`blogpost/${blogItem.slug}`}>
                                    <button>Read More</button>
                                </Link>
                            </div>
                        </>);
                    })
                }



            </div>
        </>
    )
}

export default LatestBlogs


