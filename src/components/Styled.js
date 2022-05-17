import Styled from 'styled-components'

//********************App.js********************

export const Card = Styled.div`
  width: 300px;
  color: blue;
  display: inline-flex;
  cursor: pointer;
  border-radius: 8px;
  height: 150px;
  border: 2px solid black;

  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07);
  `;

  export const FirstLayer=Styled.div`

width: 100%;
overflow: hidden;
height: 100%;
position: relative;
left: 80px;
transition: left ease 2s;

z-index: 2;

${Card}:hover &{
  left:0;
}
`;

export const SecondLayer= Styled.div`
width: 100%;
color: blue;

position: relative;
right: 60px;

transition: right ease 2s;

height: 100%;

${Card}:hover &{
  right:0;
}
`;


// *********************Input.jsx************************

export const QueryBox = Styled.div`
margin: 2rem;
border-radius: 8px;
width: 350px;
height: 50px;
padding: 10px;
display: inline-flex;
align-items: center;
justify-content: space-between;
box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;
`;

export const InputBar = Styled.input`
border: none;
border-bottom: 2px solid black;
font-size: 1rem;
margin: 0 5px;
`;

export const SearchButton = Styled.div`
border: none;
background-color: red;
padding: 5px;
color: white;
border-radius: 6px;
cursor: pointer;
`;


// ***********************RenderBGImage.jsx******************
export const BackgroundImage= Styled.img`

width: 100%;
height: 100%;
object-fit: cover;
border-radius: 6px;
`;


// *****************RenderWeather.jsx************************


export const WeatherBox= Styled.div`
margin: 1rem;
padding: 10px;
display: flex;
flex-direction: column;
text-align: left;
color: black;
font-size: bold;
font-family: 'Manrope', sans-serif;
justify-content: space-evenly;
height: 100px;
`;
