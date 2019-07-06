import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import Helmet from 'react-helmet';
import BuyButton from './BuyButton'
import Img from 'gatsby-image'
import { Grid, GridItem } from 'styled-grid-component';


const Wrapper = styled.div`
  padding: 1rem 0 2rem 0
  display: flex
  flex-wrap: wrap
  flex-direction: column
`

const Image = styled.span`
  background: #eee
  flex: 1
  min-height: 50vh
`

const Info = styled.span`
  margin-top: 2rem
  flex: 1
`

const ItemName = styled.h3`
  margin: 1rem 0 .5rem 0
`

const Cost = styled.span`
  color: lighten($black, 20%)
  font-size: 1.5rem
  margin: 1rem 0
  font-weight: 500
`
const StyledImg = styled(Img)`
  display: block
  margin: 0 auto
  width: 10%
`
const Story = styled.p`
  grid-column-start: span 2
`
/* const StyledGrid = styled(Grid)`
  display: flex
  flex-direction: column
`  */

/*
.itemPageWrapper
  padding: 1rem 0 2rem 0
  display: flex
  flex-direction: column
  .itemImgWrapper
    background: #eee
    flex: 1
    min-height: 50vh
  .itemInfoWrapper
    margin-top: 2rem
    flex: 1
  .itemName
    margin: 1rem 0 .5rem 0
  .seller
    margin-top: 1.5rem
    font-size: 1rem
    letter-spacing: 1px
    color: $grey
    span
      font-weight: 800
      color: $black
  .itemCost
    color: lighten($black, 20%)
    font-size: 1.5rem
    margin: 1rem 0
    font-weight: 500

  .backLink
    font-size: .9rem
    color: $grey
    cursor: pointer
    transition: color .2s
    font-weight: 500
    span.small
      svg
        transform: rotateZ(90deg)
        transition: color .2s
        fill: $grey
        font-weight: 800
    &:hover, &:active
      color: $black
      span svg
        fill: $black

  button
    font-size: .8rem
    font-weight: 600
    text-transform: uppercase
    padding: .5rem 1rem
    cursor: pointer
    transition: opacity .3s
    &:hover
      opacity: .8
  .reqTradeBtn
    margin: 3rem 0 0 0
    background: $black
    color: #fff
  */

const ItemContent = ({ post }) => {

  /* const post = data.markdownRemark;
  const image = post.frontmatter.cover.childImageSharp.fluid;
  const image1 = post.frontmatter.image.childImageSharp.fluid;
  const title = post.frontmatter.title;
  const price = post.frontmatter.price;
  const date = post.frontmatter.date;
  const html = post.html;
  const story = post.frontmatter.story; */

  return (
    <Wrapper>
        {/* <Image>
          
        </Image>
         <Img fluid={post.cover.childImageSharp.fluid} alt="" />
        <Info>
          <ItemName>{post.title}</ItemName>
          <Cost>${post.price}</Cost>
          <p className="ItemName">
              {post.story}
          </p>
          <BuyButton post={post}></BuyButton>
        </Info>
 */}
      <Grid>
        <Grid display="flex" flex-wrap="wrap" width="100%" height="100%" templateColumns="repeat(2, 1fr)" gap="70px" autoRows="max-content">
          <GridItem column="1" row="1" >
            <Img fluid={post.cover.childImageSharp.fluid} alt="" />
          </GridItem>
          <GridItem column="2 " row="1" >
            <Info>
              <ItemName>{post.title}</ItemName>
              <p><em>{post.scientificname}</em></p>
              <Cost><strong>${post.price}</strong></Cost>
               {/* <p className="ItemName">
                  {post.story}
              </p>  */}
              <BuyButton post={post}></BuyButton>
            </Info>
          </GridItem>
         
        </Grid>
        <Grid>
          <br />
          <GridItem column=" 1 / 2" row="2">
            <p className="ItemName">
                {post.story}
            </p>
            <br />
          </GridItem>
          <hr></hr>
        </Grid>
        <Grid display="flex" flex-wrap="wrap" width="50%" height="100%" templateColumns="repeat(2, 1fr)" gap="70px" autoRows="max-content">
          <GridItem column="1" row="1" >
            <div>Primary Color:</div>
            <div>Stress Colors:</div>
            <div>Pet Safe:</div>
            <div>Seasonality:</div> 
          </GridItem>
          <GridItem column="2 " row="1" >
            <div>{post.primarycolor}</div>
            <div>{post.stresscolors}</div>
            <div>{post.petsafe}</div>
            <div>{post.seasonality}</div>
          </GridItem>
         
        </Grid>
      </Grid>
{/*         <Grid display="flex" flex-wrap="wrap" width="100%" height="50vh" templateColumns="repeat(1, 1fr)" gap="70px" autoRows="minmax(70px, auto)"></Grid>
          <GridItem column="1" row="1" >
            <p className="ItemName">
                  {post.story}
              </p>
          </GridItem>
        </Grid> */}
    </Wrapper>    
  )
  
}


/*
      <div className="itemPageWrapper">
        <div className="itemImgWrapper" />
        <div className="itemInfoWrapper">
          <Link className="backLink" to="/">
            <span className="small">
              <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </span>All Items
          </Link>
          <h3 className="itemName">Eloquent Javascript</h3>
          <p className="itemCost frm">$40</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla modi, odit explicabo hic doloremque commodi ab molestiae. Iure voluptatem labore et aliquid soluta inventore expedita quam vel a earum!
          </p>
          <p className="seller frm">By <span>Arshad Khan</span></p>
          <button className="reqTradeBtn normalBtn">Request Trade</button>
        </div>
      </div>
    );
*/

export default ItemContent;
/* 
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
      pic
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
`; */