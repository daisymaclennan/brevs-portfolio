import styled from 'styled-components'

const Tagline = styled.h2`
  color: ${props => props.theme.colors.paragraph};

  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 5;

    margin-top: 150px;
  }

  @media screen and (min-width: 1000px){
    grid-column-start: 2;
    grid-column-end: 11;
    margin-top: calc(130px + 5vw);
  }
`

export default Tagline
