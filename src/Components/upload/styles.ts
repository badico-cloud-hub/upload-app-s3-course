
import styled from 'styled-components';

/// styled Container///
export const Container = styled.div`
  background: ${props => props.theme.colors.primary.main};
  width: 944px;
  height: 500px;
  left: 16%;
  align-items: center;
  position: relative;
  margin-top: 3rem;
  border-radius: 5px;
  padding: 30px;
  p {
    margin-top: 5px;
    font-size: 20px;
    padding: 20px;
    line-height: 30px;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;
export const Content = styled.div`
  display: flex;

  justify-content: space-around;
`;
/// styled uploader ///
export const Uploader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 400px;
  border: 2px dashed rgba(216, 255, 254, 0.4);
  box-sizing: border-box;
  border-radius: 4px;
  font-style: bold;
  font-weight: 700;

  svg:nth-child(2n) {
    margin: 5px;
   position: relative;
    width: 20px;
    height: 30px;
     left: 5px;
  margin-right: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    color:#010F0F;
  }
 h5{
 margin-top:10px;
line-height: 15.15px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
text-align: center;
color: rgba(255, 255, 255, 0.3);

 }
  strong {
    color: white;
    display: flex;
    position: absolute;
    align-items: center;
    left: 220px;
  }
  button {
    font-size: 10px;
     margin-top: 40px;
     border-radius: 2px;
    border: none;
    position: relative;
    flex-direction: row-reverse;
    width: 101px;
    height: 40px;
    left: 115px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #010F0F;
    background: linear-gradient(157.22deg, #3DA7BA -7.3%, #127587 116.99%);

    h2{
     margin-right: 15px;
    }
  }
  svg{
    color: #008486;
    left: 140px;
    margin-top: 40px;
    font-size: 4rem;
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;
/// styled fileLists  ///
export const Filelists = styled.div`
  display: flex;
  justify-content: space-around;
  width: 420px;
  height: 400px;
  border: 2px dashed rgba(216, 255, 254, 0.4);
  box-sizing: border-box;
  border-radius: 4px;

  h1{
  font-size: 20px;
  display: flex;
  margin-top: 15px;
  margin-left:10px;
  justify-content: space-around;
  color: ${props => props.theme.colors.primary.text};
  weight: 700, bold;
  }
    button{
    background-color: transparent;
    border:none;
   color: #ADFFFD;
     margin-left: 10px;
  }
`;
///styled icons///
export const ContentIcons = styled.div`
  font-size: 11px;
  display: flex;
  margin-top: 15px;
  margin-left:20px;
  justify-content: space-between;
  color: ${props => props.theme.colors.primary.text};
  weight: 700, bold;
  svg {
    margin-top: 3px;
    margin-left: 15px;
  }
:hover{
            color:blue;
        }

  ::after{
            content: '';
            height: 3px;
            border-radius: 3px 3px 0 0;
            position: absolute;
            bottom: 1px;
            left: 0;
            background: red;
        }



`;
///styled Thumb de imagens///
export const ThumbsContainer = styled.div`
  overflow: auto;
  position: absolute;
  width:  465px;
  max-height: 332px;
  left: 420px;
  top: 85px;
  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #01364A;
  }

  ::-webkit-scrollbar-thumb {
    background-color:#2992A5;
   border-radius: 8px;
  }
.grid{
  display: grid;
  margin-left: 3.1rem;
  grid-template-columns: 170px 170px;
  grid-gap:-1px;
  align-items:stretch;

  img{
  padding-bottom: 10px;
  width: 150px;
  height: 95px;
  }

 }
   .namegrid{
   display: grid;
    padding-bottom: 5px;
  grid-template-columns: 240px 143px  ;
 text-align: bottom;
 }
 .nameviewOne{
 display: grid;
  grid-template-columns: 120px 140px;
  justify-content: center;
}
.viewone{
display:flex;
flex-direction: column;
justify-content: center;
  img{
width: 298px;
min-height: 242px;
}
}
`;

export const Thumb = styled.div`
  display: grid;
  margin-left: 70px;
  grid-template-columns: 178px 321px 191px;
  padding: 2px;
  box-sizing: border-box;

  .infoFile{
 display: grid;
grid-template-columns: 120px 125px;
  height: 285px;
  div{
  max-width: 500px; // Limite maximo do texto
 white-space: nowrap; // Removendo quebra de linha
 overflow: hidden; // Removendo a barra de rolagem
text-overflow: ellipsis; // Adicionando "..." ao final do texto
  margin-left:20px;
  justify-content:center;
   text-align: center;
  }

  }

`;

export const ThumbInfor = styled.div`
display: flex;
position: static;
justify-content: center;
flex-direction: row;
overflow: hidden; // Removendo a barra de rolagem
text-overflow: ellipsis; // Adicionando "..." ao final do texto
img{
margin-left: 10px;
height: 40px;
}
 div{
 margin-left: 5px;
 }
`;
///styled boton de remove ///
export const ButtonRemove = styled.div`
  color: #2992A5;
  width: 30px;
  margin-left:9rem;
  padding: 8px;
  border: 0;
  cursor: pointer;
`;

export const ButtonRemoveGrid = styled.div`
  color: #2992A5;
  width: 30px;
  display: flex;
align-items: flex-end;
   margin-top: 50px;
  position: absolute;
  padding: 8px;
  cursor: pointer;
`;

export const ButtonRemoveOne = styled.div`
  color: #2992A5;
  width: 30px;
  display: flex;
align-items: flex-end;
   margin-top: 12.5rem;
  position: absolute;
  padding: 10px;
  cursor: pointer;
`;

export const Scroll = styled.div`
   left: 300px;
     position: 'relative',
          height: '200px',
          overflow: 'scroll',
          margin-Bottom: '100px'
`;



