import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import LatestBlogs from '../components/LatestBlogs'

const blog = (props) => {
    const [blogs, setBlogs] = useState(props.blogs);

    return (<>
        <LatestBlogs />
        <div className={styles.container}>

            <h2> All Posts</h2>
            {blogs.map(blog => {
                return (<>
                    {/* Blog Post */}
                    <div className={styles.blogs}>
                        <div className="blogItem">

                            <h3>{blog.title}</h3>
                            <h6>{blog.date}</h6>
                            <p>
                                {blog.content.substring(0, 100)}...
                            </p>
                            <Link href={`blogpost/${blog.slug}`}>
                                <button> Read More </button>
                            </Link>
                        </div>
                    </div>
                </>)
            })}


        </div>
    </>
    )
}

export default blog

export async function getServerSideProps(context) {
    const data = await fetch('http://localhost:3000/api/blogs')
    const blogs = await data.json();

    return {
        props: { blogs }
    }
}