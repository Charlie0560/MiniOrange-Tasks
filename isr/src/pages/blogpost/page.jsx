"use client"
import Link from 'next/link';

const BlogIndex = ({ posts }) => {
 return (
   <div>
     <h1>Blog Posts</h1>
     <ul>
       {posts.map((post) => (
         <li key={post.id}>
           <Link href={`/blog/${post.id}`}>
             <a>{post.title}</a>
           </Link>
         </li>
       ))}
     </ul>
   </div>
 );
};

export async function getStaticProps() {
 const response = await fetch('/api/blogPosts');
 const data = await response.json();

 return {
   props: {
     posts: data,
   },
   revalidate: 20, // Regenerate the page every 20 seconds
 };
}

export default BlogIndex;