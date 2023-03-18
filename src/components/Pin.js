import React from 'react'
import styled from 'styled-components'

function Pin(props) {

    let {urls}= props;
  return (
    <Wrapper>

        <Container>
            <img alt="pin" src={urls.regular} />
        </Container>
    </Wrapper>
  )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 10px;


`

const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border:box;
    cursor: pointer;
    width: 236px;

    img{
        display:flex;
        width:100%;
        curson: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }

`