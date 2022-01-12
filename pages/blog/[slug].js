import { gql } from '@apollo/client';
import Link from 'next/link';
import { client } from '../../lib/apollo';
import React from 'react';
import Comments from '../../components/BlogDetails/Comments';
import BlogSidebar from '../../components/BlogDetails/BlogSidebar';
import FooterITAgency from '../../components/_App/FooterITAgency';

export default function BlogPage({ post }) {
  
  return (


    <>

    <h1></h1>
     
      


            <div className="page-title-area">
                <div className="container">
                    <div className="page-title-content">
                        <h2>{post.title}</h2>
                         <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
                <Link href="/">
                  <a>Zurück zur Hauptseite</a>
                </Link>
            </div>
           
            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-content">
                                <div className="blog-details-img">
                                    <img src="/images/blog-details/blog-details-img1.jpg" alt="Image" />
                                </div>

                                <div className="blog-top-content">
                                    <div className="news-content">
                                        <ul className="admin">
                                            <li> 
                                                <i className="bx bx-user-circle"></i>
                                                Sandro Huber
                                            </li>

                                            <li>
                                                <Link href="#">
                                                    <a>
                                                        <i className="bx bx-comment"></i>
                                                        Keine Kommentare
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className="float">
                                                <i className="bx bx-calendar-alt"></i>
                                                5. August 2021
                                            </li>
                                        </ul>
                                        
                                        <h3>Die Sicherheitsrisiken beim Wechseln des Paketbesitzers</h3>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>

                                        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                    </div>

                                    <blockquote>
                                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent eum iriure dolor in hendrerit in vulputate velit esse molestie</p>
                                    </blockquote>

                                    <div className="news-content-2">
                                        <h3>Vier Hauptelemente, die wir anbieten</h3>
                                        <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi nulla quis nibh. Quisque a lectus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. malesuada erat ut turpis. Suspendisse urna nibh, viverra non semper suscipit ultrices nulla quis nibh.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-blog-post-img">
                                                <a href="blog-details.html">
                                                    <img src="/images/blog-details/blog-details-img2.jpg" alt="Image" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-blog-post-img">
                                                <a href="blog-details.html">
                                                    <img src="/images/blog-details/blog-details-img3.jpg" alt="Image" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="news-content-3">
                                        <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi nulla quis nibh. Quisque a lectus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. malesuada erat ut turpis. Suspendisse urna nibh, viverra non semper suscipit ultrices nulla quis nibh.</p>
                                    </div>
                                </div>

                                {/* Comments */}
                                <Comments />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
 
            <FooterITAgency />
        </>

  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
      query GetWordPressPosts {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return {
    paths: result.data.posts.nodes.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetWordPressPostBySlug($slug: String!) {
        postBy(slug: $slug) {
          title
          content
        }
      }
    `,
    variables: { slug },
  });

  return {
    props: {
      post: result.data.postBy,
    },
  };
}


