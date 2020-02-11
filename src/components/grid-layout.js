import styled from 'styled-components'

const GridLayout = styled.div`
  display: grid;

  @media screen and (max-width: 1000px){
    grid-template-columns: repeat(4, var(--columnWidth));
    grid-column-gap: 18px;
    margin-left: 16px;
    margin-right: 16px;
  }

  @media screen and (min-width: 1000px){
    grid-template-columns: repeat(12, var(--columnWidth));
    grid-column-gap: 32px;
    margin-left: 30px;
    margin-right: 30px;
  }

`

export default GridLayout
