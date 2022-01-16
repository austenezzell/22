import React, {useEffect} from "react";
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Carousel = () => {
    
    const data = useStaticQuery(graphql`
        query carouselQuery {
            allProjectsJson(sort: {fields: date, order: DESC}) {
                nodes {
                  id
                  keyArtVideo
                  keyArt {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  keyArtAspectRatio
                  slug
                  title
                }
            }  
        }
    `)
    
    const delay = 5000;
    const work = data.allProjectsJson.nodes;
    

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
        setIndex((prevIndex) =>
          prevIndex === work.length - 1 ? 0 : prevIndex + 1
        ),
        delay
        );
        return () => {
        resetTimeout();
        };
    }, [index]);

    console.log(index);

    return (
        <div className="featured-work-container">
            {work.map((project, count) => (
                <div key={project.id} className={ index === count ? "active container gallery twelve-col" : " container gallery twelve-col" }>
                    <div className={"gallery-img " + project.keyArtAspectRatio }>
                        <Link
                            to={"/work/" + project.slug}
                            key={count}
                            className="container work-grid">

                            <div className="image">
                                { project.keyArtVideo ? <video autoPlay loop muted ><source src={ project.keyArtVideo } type="video/mp4" /></video> : null }
                                { !project.keyArtVideo ? <Img fluid={ project.keyArt.childImageSharp.fluid }/> : null }
                            </div>
                            <div className="description">
                                <h3>{ project.title }</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Carousel



















//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {colors.map((backgroundColor, index) => (
//           <div
//             className="slide"
//             key={index}
//             style={{ backgroundColor }}
//           ></div>
//         ))}
//       </div>

     
//     </div>
//   );



