import styled from "styled-components";

export const SUnderlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  pointer-events: none;
  
  color: white;
`

export const SInstructions = styled.div`
  position: absolute;
  left: 2%;
  bottom: 5%;
  
  color: white;
  opacity: 0.5;
`

export const SInstructionsTitle = styled.p`
  font-family: 'Antonio', sans-serif;
  font-size: 1.5rem;
  line-height: 1.5em;
  font-weight: 600;
`
export const SInstructionsDescriptions = styled.p`
  font-family: 'Antonio', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5em;
`