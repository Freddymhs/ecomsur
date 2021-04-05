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

/* form search */
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
   border: none;
   caret-color: transparent;
box-shadow: -10px 0 14px -5px  rgba(0, 0, 0, 0.25);
}
.form_icon{
  
border-right: 3px solid #01FB83;
  border-right: 3px solid #01FB83;
  border-top: 3px solid #01FB83;
  border-bottom: 3px solid #01FB83;
  padding: 0;
  border: none;
  height:100%;
  background: none;
  background-color: #F6F7F9;
  border-radius: 0px 56px 56px 0px;
  /* border-left: 0px; */
  color: #01FB83;
  cursor: pointer;
  box-shadow: 10px 0 14px -5px  rgba(0, 0, 0, 0.25);
}
`
// aproved area
export const Container__aproved = styled.div`
   display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  .container_title {
  margin-left: 18%;
}
.container_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  margin-left: 6%;
  margin-right: 6%;
}
`

// card for container areas 
export const Card = styled.div`
justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3%;
  margin-bottom: 9%;
  filter: drop-shadow(0px 14px 4px rgba(0, 0, 0, 0.25));
  background: #2A0839;
  justify-content: space-between;
  border: 9px solid #F2F5F8;
  box-sizing: border-box;
  border-radius: 36px;
  -webkit-border-radius: 36px;
  -moz-border-radius: 36px;
  -ms-border-radius: 36px;
  -o-border-radius: 36px;
    width: 96%;
  h4 {
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 0px;
  color: #F2F5F8;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
p {
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  color: #F2F5F8;
  margin-top: 0;
  margin-top: 1vh;
}
button {
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  margin-top: 0;
  margin-top: 1vh;
  margin-right: 10px;
  display: flex;
  align-self: flex-end;
}
.gallery_img {
  border: 9px solid #F2F5F8;
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 36px;
  -webkit-border-radius: 36px;
  -moz-border-radius: 36px;
  -ms-border-radius: 36px;
  -o-border-radius: 36px;
}
`



// removed area 
export const Container__removed = styled.div`

`




