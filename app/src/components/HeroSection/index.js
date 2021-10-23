import { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroContent,
} from './HeroElements';
import { Button } from '../ButtonElement'
import Video from '../../assets/video/wave2.mp4';


const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      {/* <HeroBg>
        <VideoBg autoplay loop muted >
            <source src={Video} type="video/mp4"></source>
        </VideoBg>
      </HeroBg> */}

      <video
          autoPlay
          loop
          muted
          style={{
            height: '120vh',
            width: '100%',
            position: "absolute",
            objectFit: "cover",
            zIndex: "-1",
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            marginBottom:'40px',
            backgroundColor: '#b2bec3'

          }}>

          <source src={Video} type="video/mp4"></source>

          </video>
      {/* <HeroContent>
        <HeroH1>Lorem ipsum dolor sit amet</HeroH1>
        <HeroP>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        </HeroP>
        <HeroBtnWrapper> */}
          {/* <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        {/* </HeroBtnWrapper> */}
      {/* </HeroContent> */}
    </HeroContainer>
  );
};

export default HeroSection;
