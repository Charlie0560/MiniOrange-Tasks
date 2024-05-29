import { getPostBySlug } from "@/helpers/helpers";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/navigation'

function blog({ posts, slug }) {
  console.log(slug)
  return (
    <Link href={`/blog/${slug}`} locale="fr">
      To /fr/another
    </Link>
  );
}

export async function getStaticProps({ locale, params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const slug = params.slug;

  const posts = getPostBySlug(slug, [
    "id",
    "title",
    "description",
    "metaTitle",
    "metaDescription",
    "ogTitle",
    "ogDescription",
    "ogImage",
    "content",
    "keywords",
    "mainButtonText",
    "mainButtonLink",
    "tags",
    "thumbnail",
    "updatedOn",
    "author",
    "profilePic",
  ]);

  return {
    props: {
      posts,
      slug
    },
  };
}

export const getStaticPaths = ({ locales }) => {
  return {
    paths: [
      // if no `locale` is provided only the defaultLocale will be generated
      { params: { slug: "post-1" }, locale: "en-US" },
      { params: { slug: "post-1" }, locale: "fr" },
    ],
    fallback: true,
  };
};


export default blog;
