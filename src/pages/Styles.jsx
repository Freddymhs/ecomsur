import styled from 'styled-components'
import capa from '../assets/capa.png';

// homepage 
export const Container = styled.div`
  background-color: #01FB83;
  min-height: 100vh;
  background-image: url(${capa});
  background-size: 100vw 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container__card = styled.div`
  background-color: #01FB83;
  background-image: url(${capa});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 90vh;
  min-width: 96vw;
  box-shadow: 0px 0px 9px 9px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`

export const Container__text = styled.h1`
 color: #F2F5F8;
  align-self: center;
  position: absolute;
  font-size: 4em;
  overflow: hidden;
  white-space: wrap;
  justify-content: center;
  max-width: 64%;
  text-align: center;
`

export const Container__img = styled.img`
   padding-left: 20%;
`

export const Container_btn = styled.button`
    box-shadow: 3px 4px 0px 0px #01FB83;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
  width: 30vw;
  height: 10vh;
  font-size: 1.7em;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  text-transform: uppercase;
  
&:hover{
  box-shadow: 3px 4px 0px 0px white;
  background-color: #01FB83;
  color: #2A0839;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
}
`
// calificaciones
export const ContainerMain = styled.div`

  
`



