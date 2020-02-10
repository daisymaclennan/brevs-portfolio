import React from 'react'
import Layout from '../components/layout'
import NameImage from '../components/name-image'
import GridLayout from '../components/grid-layout'
import Tagline from '../components/tagline'
import HighlightText from '../components/highlight-text'
import SectionTitle from '../components/section-title'
import CenterBigText from '../components/center-big-text'
import Stats from '../components/stats'
import Project from '../components/project'
import Team from '../components/team'
import ContentWithImageDark from '../components/content-with-image-dark'

export default () => (
  <Layout>
    <GridLayout>
      <NameImage />
      <Tagline>
        Hi, I’m <HighlightText box>Jack</HighlightText>. I design websites to create better experiences on the web.
      </Tagline>
      {/*About Me Section*/}
      <SectionTitle>
        About <HighlightText>Me</HighlightText>
      </SectionTitle>
      <CenterBigText>
        <p>
          I’m a twenty-six year old UI designer from England who not so recently graduated from the University of Portsmouth studying Digital Media BSc, Which is a culmination of web design / development and other digital media.
        </p>

        <p>
          My skillset does not stop at UI design, I have a strong passion for UX design, I like to see myself as a designer who embraces the challenges UX gives UI designers. Thinking about how I can overcome a problem through design is a deep passion of mine. I have worked at <HighlightText>Si digital</HighlightText> for the past two years, I ha  ve learn’t so much with the design and development team there.
        </p>

        <p>
          I enjoy working with clients that truely value their website and want to improve the experince of their customers who keep their business running.
        </p>
      </CenterBigText>
      {/*Number stats grid - change values by editing the stats variables at the bottom*/}
      <Stats stats={ stats } />
      {/*Project section*/}
      <SectionTitle>
        Client <HighlightText>Pro</HighlightText>jects
      </SectionTitle>
      {/*Reuse this component to add new projects*/}
      {/*Smartdriverclub Insurance*/}
      <Project
        title="Smartdriverclub Insurance"
        description="I was directly involved within the website redesign, Smartdriverclub Insurance wanted a fresh new look for their website. This involved building a design system for the developers to work from aswell as thinking through users flows of how the website will be used to better conversion rate."
        image="sdc.png"
      />
      {/*<ContentWithImageDark
        title="Wireframes"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        image="limbo-wireframes.png"
      />*/}
      <Team team={ smartdriverclubTeam } />
      {/*Limbo*/}
      <Project
        title="LimbO"
        description="LimbO Came to Si digital for help increasing sales but maintaining to accessibility of configuring a customers own LimbO."
        image="sdc.png"
      />
      <Team team={ limboTeam } />
    </GridLayout>
  </Layout>
)

const stats = [
  ["5", "Client projects"],
  ["2", "Years of experience"],
  ["1200", "Lines of Lorem Ipsum"],
  ["12", "Instagram Posts"],
  ["4", "Dribbble Posts"],
  ["8", "Client projects"]
]

const smartdriverclubTeam = {
  ui: ["Jack Bretherick"],
  ux: ["Jack Bretherick"],
  dev: ["Danny Walker"],
  leadDesign: "Tom O'malley",
  leadDev: "Oli Northam",
  agency: "Si digital Ltd",
  year: 2020,
  website: ""
}

const limboTeam = {
  ui: ["Jack Bretherick"],
  ux: ["Jack Bretherick", "Tom O'malley"],
  dev: ["Danny Walker"],
  leadDesign: "Tom O'malley",
  leadDev: "Oli Northam",
  agency: "Si digital Ltd",
  year: 2020,
  website: ""
}
