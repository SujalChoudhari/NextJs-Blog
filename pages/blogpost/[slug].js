import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css'
import LatestBlogs from '../../components/LatestBlogs'

const slug = (props) => {
    const router = useRouter()

    const [blogItem, setBlogItem] = useState(props.blog);
    return (<>

        <section className={styles.blogPost}>
            <h1>{blogItem.title}</h1>
            <h5> Date: {blogItem.date} | Author: {blogItem.author}</h5>
            <p> {blogItem.content}</p>
        </section>

        
    </>
    )
}

export default slug


export async function getServerSideProps(context) {
    let slug = context.query.slug;
    const data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
    const blog = await data.json();

    return {
        props: {
            blog
        }
    }
}