import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Footer from "./Footer";

const About = () => {
  console.log("About");

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
        className="parallax-layer"
        style={{
          ...parallaxLayer1,
          // backgroundColor: "#ffe6e6",
        }}
      >
        <animated.img
          src="./about/camera.jpg"
          alt="man sitting on a chair with a camera"
          style={{
            width: "100%",
            height: "50vh",
            objectFit: "cover",
            ...imageAnimation,
          }}
        />
        <section className="about-section01">
        
          <h1>About the Pilot Coder Development Team</h1>
          <h2>Welcome to Pilot Coder</h2>
          <p>
            Greetings from the skilled developers at Pilot Coder! Our team is
            thrilled to introduce you to the inner workings of our news platform,
            where React expertise and API manipulation converge to deliver a
            cutting-edge and user-centric experience.
          </p>
        
        </section>
      </animated.div>
      <animated.div
        className="parallax-layer"
        style={{
          ...parallaxLayer1,  // Use the same parallaxLayer1 style for the second layer
          // backgroundColor: "#ffcccc", zIndex: -1
        }}
      >
        <section className="about-section02">
    <h2>Our Tech Journey</h2>
    <ul>
      <li>
        React at the Helm: The driving force behind Pilot Coder is React, the
        dynamic JavaScript library that forms the backbone of our user
        interface. We've harnessed the versatility of React to create an
        engaging and responsive platform.
      </li>
      <li>
        API Mastery: Data fuels our passion, and we excel in the art of API
        manipulation. By seamlessly integrating with various APIs, we ensure
        that Pilot Coder not only delivers the latest news but does so in a
        structured and efficient manner.
      </li>
      <li>
        Crafting Front-End Excellence: Design matters, and our front-end
        development prowess shines through in the sleek and intuitive design
        of Pilot Coder. We believe that a well-designed website enhances the
        overall user experience
      </li>
    </ul>
  </section>
  

      </animated.div>

      <animated.div
        className="parallax-layer"
        style={{
          ...parallaxLayer1,  // Use the same parallaxLayer1 style for the third layer
          // backgroundColor: "#ffb3b3", zIndex: -1
        }}
      >
        <section className="about-section02">
    <h2>What Sets Pilot Coder Apart</h2>
    <ul>
      <li>
        Innovation in Flight: We are driven by a relentless passion for
        innovation. The Pilot Coder team explores new technologies and
        implements cutting-edge solutions, ensuring that our platform remains
        at the forefront of web development.
      </li>
      <li>
        Collaborative Sky: Collaboration is the wind beneath our wings.
        Through open communication and shared ideas, we've built a platform
        that reflects the collective expertise of the Pilot Coder team.
      </li>
    </ul>
  </section>
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

export default About;