const fs = require('fs');
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkHeadingId from 'remark-heading-id';
import { parse } from 'node-html-parser';
import { categories } from '../utils/categories';

import { tag } from '../utils/tag';
import remarkGfm from 'remark-gfm';

const postsDirectory = join(process.cwd(), 'posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(filename, fields) {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = slug;
        }

        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getPostByTitle() {}

export function getHeadlines(htmlContent) {
    const root = parse(htmlContent);
    const headings = root.querySelectorAll('h2, h3, h4, h5, h6'); // Select all heading elements

    const matchingHeadings = Array.from(headings).filter((heading) => {
        return heading.hasAttribute('id');
    });

    return matchingHeadings;
}

export function getPostsForCategory(fields, category) {
    const slugs = getPostSlugs();

    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .filter((post) => {
            if (post.category.includes(category.toLowerCase())) {
                return post;
            }
        })
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}

export function getPostsForTag(fields, tag) {
    const slugs = getPostSlugs();

    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .filter((post) => {
            if (post.tags.includes(tag)) {
                return post;
            }
        })
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}

export function getAllPosts(fields) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}

export async function markdownToHTML(markdown) {
    const resultHtml = await remark()
        .use(remarkHeadingId)
        .use(remarkGfm)
        .use(html)
        .process(markdown);

    return resultHtml.toString();
}

export function getCategories() {
    return JSON.stringify(categories);
}

export function getTag() {
    return JSON.stringify(tag);
}

// Helper functions to prepare data for homepage hydration
const commonRequiredFrontmatterFields = [
    'title',
    'description',
    'date',
    'slug',
    'author',
    'thumbnail',
    'excerpt',
    'content',
    'category',
    'tags',
    'createdOn',
];

export function getLatestPosts() {
    const latest = getPostsForCategory(commonRequiredFrontmatterFields, 'latest')
        .sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn))
        .slice(0, 6);

    return latest;
}

export function getFeaturedPosts() {
    const featured = getPostsForCategory(commonRequiredFrontmatterFields, 'featured');
    return featured;
}

export function getMainPosts() {
    const main = getPostsForCategory(commonRequiredFrontmatterFields, 'main');
    return main;
}
