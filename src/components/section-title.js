import styled from 'styled-components'

const SectionTitle = styled.h3`
  display: block;
  margin-top: 150px;
  color: ${props => props.theme.colors.titleSolid};

  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 5;
    line-height: 100%;
    margin-bottom: 60px;
    word-wrap: break-word;
  }

  @media screen and (min-width: 1000px){
    grid-column-start: 2;
    grid-column-end: 13;
    margin-bottom: 90px;
    white-space: nowrap;
  }


`

export default SectionTitle
