import styled, {css} from "styled-components";

export const SCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  border-radius: 10px;
  padding: 40px;
  margin: 30px 0;
  text-align: center;
  
  background-color: #04293A;
  color: white;
`

export const SCardTitle = styled.p`
  margin: 0;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
`

export const SCardText = styled.p`
  margin: 5px 0 30px 0;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: #a6a6a6;
`

export const SDragDropZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 50px;
  margin: 10px 0 30px 0;
  text-align: center;
  background-color: transparent;
  color: white;
  border: 2px dashed white;
  //background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='white' stroke-width='4' stroke-dasharray='6%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

  ${props => props.active && css`
    border: 2px dashed green;
  `}
`

export const SUploadImg = styled.img`
  width: 80px;
  margin-bottom: 10px;
`

export const SButton = styled.button`
  height: 50px;
  background-color: #ECB365;
  margin-top: 30px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: black;

  font-size: 1.1rem;
  line-height: 1.75rem;
  font-weight: 600;

  &:active {
    transform: scale(0.98);
    opacity: 0.95;
  }

  &:disabled {
    //background-color: #ECB365;
    //opacity: 0.6;
    background-color: transparent;
    border: 2px solid #ECB365;
    color: white;
    cursor: auto;
    pointer-events:none;
  }
`

export const SBrowse = styled.span`
  text-decoration: underline;
  font-weight: 600;
  color: #ecc185;
  display: inline-block;
  cursor: pointer;
`
export const SDivContainerTop = styled.div`
  display: flex;
  flex-direction: column;
`
export const SDivContainerBot = styled.div`
  display: flex;
  flex-direction: column;
`