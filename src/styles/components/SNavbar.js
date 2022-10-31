import styled from "styled-components"

export const SHeader = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: transparent;
    height: 50px;
    padding: 0 20px;
    z-index: 1;
`

export const SHeaderLeft = styled.div`
  flex:1;
  justify-content: left;
`

export const SHeaderCenter = styled.div`
  flex:5;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SHeaderRight = styled.div`
  flex:1;
  display: flex;
  justify-content: right;
`

export const SButtonReturn = styled.div`
  display: flex;
  height: 30px;
  width: 120px;
  justify-content: center;
  align-items: center;
  background-color: #04293A;
  color: #ECB365;
  border-radius: 10px;
  gap: 10px;
  cursor: pointer;
  
  &:hover{
    transform: scale(1.1);
  }
  
  &:active{
    transform: scale(1.0);
    opacity: 0.7;
  }
`
