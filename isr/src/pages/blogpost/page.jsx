"use client"
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('../api/blogPosts.json')
  const data = await res.json();
  console.log(data);
  return {
    props: { posts: data }
  }
}

const BlogIndex = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts?.map((post) => (
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


export default BlogIndex;