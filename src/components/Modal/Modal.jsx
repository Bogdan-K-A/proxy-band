import React from 'react'
import styled from 'styled-components'

export const Modal = ({ children }) => {
  return (
    <Overlay>
      <StyledModal>{children}</StyledModal>
    </Overlay>
  )
}

/* ---------------------------------- Style --------------------------------- */

const StyledModal = styled.div`
  width: 500px;
  height: 400px;
  padding: 20px 30px 50px 30px;

  background: #4adcbf;

  border-radius: 20px;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`
