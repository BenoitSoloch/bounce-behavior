import styled from "styled-components";

export const SFileCard = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid white;
  padding: 20px 5px;
  text-align: center;
  background-color: #04293A;
  color: white;
`

export const SFileCardName = styled.p`
  margin: 0;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  color: #ecc185;
`

export const SFileCardDescription = styled.p`
  margin: 3px 0 0 0;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 500;
  color: #a6a6a6;
`

export const SFileZoneLeft = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SFileZoneMiddle = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
`

export const SFileZoneRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SFileIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
`

export const SFileIconImg = styled.img`
  width: 20px;
  height: 20px;
`

export const SCloseButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  line-height: 1.75rem;
  font-weight: 600;
  border: none;
  background-color: transparent;
  color: #fc7f7f;

  &:hover {
    background-color: #021921;
  }

  &:active {
    transform: scale(0.98);
    opacity: 0.95;
  }
`