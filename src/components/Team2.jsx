import React, { useEffect, useState, useContext } from "react";
import { useSpring, animated, config } from "react-spring";
import { MyContext } from '../contexts/Context';
import Footer from "./Footer";

const Team2 = () => {
  const { team, setTeam } = useContext(MyContext);

	setTeam(team);

	console.log(team);

  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxLayer1 = useSpring({
    transform: `translateY(${scrollY * 0.1}px)`,
    config: config.slow,
  });

  const imageAnimation = useSpring({
    transform: `translateY(${-scrollY * 0.1}px)`, // Adjust the multiplier for the desired image parallax effect
    config: config.slow,
  });

  return (
    <>
    <div className="about-main-container">
      {/* Parallax Layers */}
      <animated.div
        className="animated-container fade-in"
        style={fadeInAnimation}
      >
        <main>{/* ... */}</main>
        <h1 className="team-heading">THE TEAM</h1>
        
        
      </animated.div>
      <animated.div
        className="parallax-layer"
        style={{
          ...parallaxLayer1,
          // backgroundColor: "#ffe6e6",
        }}
      >
        {/* <animated.img
          src=""
          alt="man sitting on a chair with a camera"
          style={{
            width: "100%",
            height: "50vh",
            objectFit: "cover",
            ...imageAnimation,
          }}
        /> */}
        {/* <section className="about-section01"> */}
        
        
      </animated.div>
      <animated.div
        className="parallax-layer team-container" 
        style={{
          ...parallaxLayer1,  // Use the same parallaxLayer1 style for the second layer
          // backgroundColor: "#ffcccc", zIndex: -1
        }}
      >
        {/* ... content for the second parallax layer */} 
        
        

				{team.map((team) => {
					return (
						<div key={team.id}>
							<img
								className="team-img"
								src={team.imgUrl}
								alt=""
							/>

							<h2 className="team-name">{team.name}</h2>
							<p>{team.profession}</p>
                            
                            
                           
							 <p className="team-github">Github<a className="fa-brands fa-github icon" href={team.github}  target="_blank"></a></p>
							<p className="team-linkedIn"> LinkedIn <a className="fa-brands fa-linkedin icon" href={team.linkedIn}  target="_blank"></a></p> 
						</div>
					);
				})}
			

      </animated.div>

      <animated.div
        className="parallax-layer"
        style={{
          ...parallaxLayer1,  // Use the same parallaxLayer1 style for the third layer
          // backgroundColor: "#ffb3b3", zIndex: -1
        }}
      >
        {/* ... content for the third parallax layer */}
      </animated.div>
      <animated.div
        className="parallax-layer"
        style={{
          ...parallaxLayer1,  // Use the same parallaxLayer1 style for the third layer
          // backgroundColor: "#ffb3b3",
        }}
      >
        {/* ... content for the fourth parallax layer */}
        
      </animated.div>
      <animated.div
        className="animated-container fade-in"
        style={fadeInAnimation}
      >
        <main>{/* ... */}</main>

        
        
      </animated.div>

      

    </div>

    <div className="about-footer">
    

      <animated.div
        className="animated-container fade-in"
        style={fadeInAnimation}
      >
        <Footer />

        
        
      </animated.div>
      
    </div>

        
    </>
       
        

    

    
  );
};

export default Team2;