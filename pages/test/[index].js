// pages/blog/[slug].js
import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import BlockContent from '@sanity/block-content-to-react';

const client = sanityClient({
  projectId: 'nahm0f1b',
    dataset: 'production',
    apiVersion: '2023-10-01',
 // Adjust to your API version
  token: 'sk9z1Tt5M7bDySgKW0SOmVH3IOYtFIW5bkY3xjzcPRa9TIeFHtd3BU0gLluLApbPjvYnRB6ATD2xMavpLOBxzM4A2ZTGjuuYA1CFInMqvJeCHUK8D7ckc9dxYqvObAzSRLrH0ReVqZdqZaRa9NwmGXpORlBqMP5q0hQk6JfVTc3VVntwinGH',
  useCdn: false, // Set to true for read-only operations if desired
});

const BlogPost = ({ blogPost }) => {
  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <BlockContent
        blocks={blogPost.content}
        projectId={client.clientConfig.projectId}
        dataset={client.clientConfig.dataset}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const query = `*[_type == 'blogPost' && slug.current == $slug][0]`;
  const params = { slug };

  try {
    const blogPost = await client.fetch(query, params);
    return {
      props: { blogPost },
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      props: { blogPost: null },
    };
  }
}

export default BlogPost;
