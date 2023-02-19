import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I am Farid Sayyed <br />
          A Full Stack Developer
        </SectionTitle>
        <SectionText>

      I am a full stack developer with experience in developing applications who creates innovative solutions that solve real-world problems in both front-end and back-end development, and is proficient in MERN Stack, Web 3.0 and AI. I am an excellent problem solver who is always looking for ways to improve the user experience of my projects. I took pride in my work and strives to create the best possible product for his clients.
        </SectionText>
        <Button onClick={props.handleClick}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;