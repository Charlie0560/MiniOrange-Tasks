'use client'
import React from 'react'

function ISR(pageProps) {
    console.log(pageProps)
    return (
        <>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </>
    )
}


// ISR.getInitialProps = async (context) => {
//     console.log("Hiii")
//     const ctx = await ISR.getInitialProps(context)
//     console.log(ctx);
//     try {
//         const response = await fetch('../api/blogPosts');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err);
//     }
//     return {
//         posts: data,
//     };
// };

ISR.getInitialProps = async (context) => {
    
    const response = await fetch('../api/blogPosts.json');
    const data = await response.json();
    console.log(data);
    const ctx = await ISR.getInitialProps(data)

    return { posts: data }
}
export default ISR


