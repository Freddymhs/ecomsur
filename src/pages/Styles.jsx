import styled from 'styled-components'
import capa from '../assets/capa.png';


//header 

export const Menu = styled.div`

   display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: -webkit-sticky;
  background-color: #01FB83;

a{
  text-decoration: none;
  font-size: 1.8rem;
  color: #2A0839;
}
ul{
  list-style-type: none;
  flex-wrap: wrap;
}
.ul-right {
 
  min-width: 70%;
  display: flex;
  justify-content: flex-end;
}
.ul-right li {
  display: inline-flex;
  padding-right: 4%;
  padding-left: 4%;
  padding-top: 2%;
  padding-bottom: 2%;
}
.ul-left {
  display: flex;
  min-width: 10%;
  align-items: center;
  justify-content: flex-start;
  padding-right: 4%;
  padding-left: 4%;
  padding-top: 2%;
  padding-bottom: 2%;
}
`




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

// homepage 
export const ContainerMain = styled.div`
  background-color: #01FB83;
  min-height: 100vh;
  background-size: 100vw 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 3fr 1fr 5vh;
`
export const Container__input = styled.div`
.content__search{
padding-top: 1vh;
  display: flex;
  justify-content: center;
  padding-bottom: 3vh;
}
.form_input{
 min-height: 100%;
  min-width: 34vw;
  background: #F6F7F9;
  border-left: 3px solid #01FB83;
  border-top: 3px solid #01FB83;
  border-bottom: 3px solid #01FB83;
  border-radius: 56px 0px 0px 56px;
  -webkit-border-radius: 56px 0px 0px 56px;
  -moz-border-radius: 56px 0px 0px 56px;
  -ms-border-radius: 56px 0px 0px 56px;
  -o-border-radius: 56px 0px 0px 56px;
  display: flex;
  text-align: center;
  border-right: 0px;
  cursor: pointer;
}
.form_icon{
border-right: 3px solid #01FB83;
  border-top: 3px solid #01FB83;
  border-bottom: 3px solid #01FB83;
  padding: 0;
  /* border: none; */
  background: none;
  background-color: #F6F7F9;
  border-radius: 0px 56px 56px 0px;
  -webkit-border-radius: 0px 56px 56px 0px;
  -moz-border-radius: 0px 56px 56px 0px;
  -ms-border-radius: 0px 56px 56px 0px;
  -o-border-radius: 0px 56px 56px 0px;
  border-left: 0px;
  color: #01FB83;
  cursor: pointer;
}
`

export const container__aproved = styled.div`
 
`


export const container__removed = styled.div`

`




