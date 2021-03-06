import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import { SocialIcon } from 'react-social-icons';
import theme from '../../config/theme';
import Img from 'gatsby-image'

const PostWrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 4rem 4rem 4rem 4rem;
  .SocialIcon {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 25px;
    height: 25px;
  }
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Wrapper = styled.section`
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  height: 17rem;
  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);

  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
  }

  @media (max-width: 1000px) {
    flex-basis: calc(99.9% * 1 / 2 - 1rem);
    max-width: calc(99.9% * 1 / 2 - 1rem);
    width: calc(99.9% * 1 / 2 - 1rem);
    height: 18rem;
  }

  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 15rem;
  }
`;

const SocialWrapper = styled.span`
  display: flex;
   flex-direction: row;
   justify-content: flex-end;

  /* width: 75%;
  height: 75%; */
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
  border-radius: ${props => props.theme.borderRadius.default};
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: -10;
    border-radius: ${theme.borderRadius.default};
    transition: opacity ${theme.transitions.default.duration};
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.default};
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`;

const Info = styled.div`
  color: ${props => props.theme.colors.white.light};
  margin: 0 1rem 1.25rem 1.25rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Title = styled.h2`
  margin-bottom: 0.6rem;
`;

const Index = ({ data }) => {
  //const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Sweet Leaf Succulents'} />

      <Header title="Sweet Leaf Succulents">{/* and Ornamental Plants */}
        <SocialWrapper className="SocialIcon">
          <SocialIcon url="https://www.facebook.com/SweetLeafSucculents" bgColor="#000000" />
          <SocialIcon url="https://twitter.com/sweetleafsuccs" bgColor="#000000"/>
          <SocialIcon url="http://pinterest.com/" bgColor="#000000"/>
          <SocialIcon url="https://www.instagram.com/sweetleafsucculents/" bgColor="#000000" />
          <SocialIcon url="https://www.reddit.com/user/SweetLeafSucculents/" bgColor="#000000" />
        </SocialWrapper>
      </Header>

      <PostWrapper>
        <Wrapper>
          <Image>
              <Img fluid={data.imageOne.childImageSharp.fluid} />  
          </Image>
          <StyledLink to="/catalog/echeveria/">
            <Info>
              <Title>Echeveria</Title>
            </Info>
         </StyledLink>
        </Wrapper>
        <Wrapper>
          <Image>
              <Img fluid={data.imageOne.childImageSharp.fluid} />  
          </Image>
          <StyledLink to="/catalog/sempervivum-heuffelii/">
            <Info>
              <Title>Sempervivum Heuffelii</Title>
            </Info>
          </StyledLink>
        </Wrapper>
        <Wrapper>
          <Image>
              <Img fluid={data.imageOne.childImageSharp.fluid} />  
          </Image>
          <StyledLink to="/catalog/hens-n-chicks/">
            <Info>
              <Title>Hens & Chicks</Title>
            </Info>
          </StyledLink>
        </Wrapper>
        <Wrapper>
          <Image>
              <Img fluid={data.imageTwo.childImageSharp.fluid} />  
          </Image>
          <StyledLink to="/catalog/aeonium/">
            <Info>
              <Title>Aeonium</Title>
            </Info>
          </StyledLink>
        </Wrapper>
        <Wrapper>
          <Image>
              <Img fluid={data.imageOne.childImageSharp.fluid} />  
          </Image>
          <StyledLink to="/catalog/senecio/">
            <Info>
              <Title>Senecio</Title>
            </Info>
          </StyledLink>
        </Wrapper>
        <Wrapper>
          <Image>
              <Img fluid={data.imageOne.childImageSharp.fluid} />  
          </Image>
          <StyledLink to="/catalog/soft-sedum/">
            <Info>
              <Title>Soft Sedum</Title>
            </Info>
          </StyledLink>
        </Wrapper>
        <Wrapper>
          <Image>
              <Img fluid={data.imageOne.childImageSharp.fluid} />  
          </Image>
          <StyledLink to="/catalog/hybrids/">
            <Info>
              <Title>Hybrids</Title>
            </Info>
          </StyledLink>
        </Wrapper>
        <Wrapper>
          <Image>
              <Img fluid={data.imageOne.childImageSharp.fluid} />  
          </Image>
          <StyledLink to="/catalog/more-soft-varieties/">
            <Info>
              <Title>More Soft Varieties</Title>
            </Info>
          </StyledLink>
        </Wrapper>
        <hr/>
      </PostWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000, quality: 90, traceSVG: {color: "#2B2B2F"}) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "echeveria.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "kiwi.jpg" }) {
      ...fluidImage
    }  
  }
`;