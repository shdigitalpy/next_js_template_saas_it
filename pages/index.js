import React from 'react';
import NavbarSaasStartup from '../components/_App/NavbarSaasStartup';
import MainBanner from '../components/SaasStartup/MainBanner';
import Partner from '../components/SaasStartup/Partner';
import AboutUs from '../components/SaasStartup/AboutUs';
import Services from '../components/SaasStartup/Services';
import OurWorks from '../components/SaasStartup/OurWorks';
import Pricing from '../components/SaasStartup/Pricing';
import Testimonials from '../components/SaasStartup/Testimonials';
import FunFacts from '../components/SaasStartup/FunFacts';
import LatestNews from '../components/SaasStartup/LatestNews';
import ContactUs from '../components/SaasStartup/ContactUs';
import FooterSaasStartup from '../components/_App/FooterSaasStartup';
import 'moment/locale/de-ch';

import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";


const Index = ({ posts }) => {
    
    return (
        <>
            <div className="bg-fafafa">
                <NavbarSaasStartup />
                <MainBanner />
                <Partner />
                <AboutUs />
                <Services />
                <OurWorks />
                <Pricing />
                <Testimonials />
                <FunFacts />
                <LatestNews posts={posts} />
                <ContactUs />
                <FooterSaasStartup />
            </div>
        </>
    )
}

export default Index;

export async function getStaticProps() {

    const url = process.env.GRAPH_URL

    const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache()
});

    const response = await client.query({
        query: gql`

     query MyQuery {
              posts {
                edges {
                  node {
                    date
                    title
                    author {
                      node {
                        firstName
                        lastName
                      }
                    }

                    featuredImage {
                        node {
                          sourceUrl
                        }
                      }

                    slug
                  }
                }
              }
            }


        `


    });

    const posts = response.data.posts.edges.map(({ node }) => node);

  return {
    props: {

        posts,

    }, // will be passed to the page component as props
  }
}