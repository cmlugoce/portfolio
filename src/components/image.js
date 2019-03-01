import styled from 'styled-components';
import React from "react"
import './layout.css'


const Div = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: row;
flex-wrap: wrap;
width: 100vw;
margin-left: 0;

` 
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */


class Image extends React.Component{
//   constructor(props) {
//     super(props);
//     this.handleMouseHover = this.handleMouseHover.bind(this);
//     this.state = {
//       isHovering: false,
//     };
//   }

//   handleMouseHover() {
//     this.setState(this.toggleHoverState);
//   }

//   toggleHoverState(state) {
//     return {
//       isHovering: !state.isHovering,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <div
//           onMouseEnter={this.handleMouseHover}
//           onMouseLeave={this.handleMouseHover}
//         >
//           Hover Me
//         </div>
//         {
//           this.state.isHovering &&
//           <div>
//             Hovering right meow! 🐱
//           </div>
//         }
//       </div>
//     );
//   }
// }
  
  state={
    like: false,
    
    date: new Date().toLocaleString()
  
  }
  handleHover = () =>{
   //listItems.style.maxWidth = '600px'\
   this.setState({
    like: !this.state.like
  });
   console.log('hey')
  }
  
  render(){
    const image = ['https://imgur.com/oJ1VEAK.jpg','https://imgur.com/9z4ILJu.jpg', 'https://imgur.com/XcPup3l.jpg' ]
   
    //const label = this.state.like ? 'Unlike' : 'Like'
    const listItems = image.map((number, i) =>
  <span><img src ={number} key={i} alt= {`image-${i}`} onMouseEnter={this.handleHover}  style={{maxWidth: `300px`}} className={`im im-${i}`}/></span>
    )
    return(
  <Div>
{listItems }



  </Div>


)}
}
export default Image
