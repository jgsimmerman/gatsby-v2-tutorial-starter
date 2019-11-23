import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO, SecondNav } from 'components';
import '../styles/prism';
import Helmet from 'react-helmet';
import BuyButton from '../components/BuyButton'
import ItemContent from '../components/ItemContent'

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

// This is identical to the Container.jsx wrapper, but 
/* 
  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);
*/
// is removed. This is a stupid hack that needs to be refactored,
// but this makes the ItemContent pages render correctly.

const Wrapper = styled.section`
  text-align: ${props => (props.center ? 'center' : '')};
  margin: auto;
  padding: 3rem 1.5rem;
  width: 60%;
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
  flex: 1;



  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
  }
`;



const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const post = data.markdownRemark;
  const image = post.frontmatter.cover.childImageSharp.fluid;
  //const pic = post.frontmatter.image.childImageSharp.fluid;
  const title = post.frontmatter.title;
  const date = post.frontmatter.date;
  const html = post.html;
  const story = post.frontmatter.story;
  const pic = post.frontmatter.pic.childImageSharp.fluid;
  const snipPic = post.frontmatter.pic;
  const scientificname = post.frontmatter.scientificname;

  return (
    <Layout>
      
      <SEO
        title={title}
        story={story}
        //description={post.frontmatter.description || post.excerpt || ' '}
        image={image}
        pathname={post.frontmatter.path}
        article
      />
      <Header title={title} cover={image} />
        
      <Wrapper>
       
        <ItemContent post={post.frontmatter} />
        
      </Wrapper>
      
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        id
        price
        path
        story
        scientificname
        primarycolor
        stresscolors
        petsafe
        seasonality
        bloomcolor
        temperature
        pic {
          childImageSharp {
            fluid(
              maxWidth: 1000
               quality: 90
               traceSVG: {color: "#2B2B2F"}
              ){
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
          }
        }
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
