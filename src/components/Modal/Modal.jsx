import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const Modal = ({ children }) => {
  return (
    <Overlay>
      <StyledModal>{children}</StyledModal>
    </Overlay>
  )
}

const StyledModal = styled.div`
  width: 500px;
  height: 300px;

  background: grey;
  border-radius: 10px;
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
