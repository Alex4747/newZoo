import { useState, useEffect } from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import axios from "axios";

const ZooMainStyled = styled.div`
  background-color: #343a37;
  width: 100%;
  height: 100%;
`;

const ZooMainAnimalsStyled = styled.div`
  text-align: center;
  .quote {
    padding: 20px 0;
    color: white;
    font-size: 25px;
  }
  button {
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
  }
  div {
    div {
      .borderColor {
        border: 20px solid #8837b7;
        padding-top: 100px;
        align-items: center;
        justify-content: center;
        height: 650px;
        color: white;
        .cage {
          position: absolute;
        }
        h2 {
          font-size: 30px;
          margin-top: -40px;
          margin-bottom: 20px;
        }
        .imageFlex {
          display: flex;
          div {
            position: relative;
            text-align: center;
            .imgCloud {
              margin-right: -100%;
              width: 200px;
              height: 150px;
            }
            .textInImg {
              width: 140px;
              margin: 0 auto;
              text-align: center;
              position: absolute;
              bottom: 60px;
              left: 140px;
              font-size: 18px;
              font-weight: bold;
            }
          }
        }
        img {
          height: 300px;
        }
        p {
          font-size: 35px;
          color: white;
          text-decoration: none;
        }
        .birthDay {
          font-size: 25px;
        }
      }
    }
  }
`

function Main({animals}) {
  let [satiety, setSatiety] = useState(100);
  let [quote, setQuote] = useState([]);
  const intervalTime = 1000 * 1;
  let qweewq = 'asdasd';
  let hungerPeriod = null;
  useEffect(() => {
    hungerPeriod = setInterval(() => {
        setSatiety(satiety -= 10);
        console.log(satiety);
        if (satiety === 0) {
        clearInterval(hungerPeriod);
      }
    }, intervalTime)

    axios.get('https://fortnite-api.com/v1/map')
      .then(response => {
        setQuote(response.data.data.pois[4].name);
      })
      .catch(error => {
        console.error(error)
      });
  }, []);

  useEffect(() => {
    console.log(satiety);
    if (satiety === 0) {
      clearInterval(hungerPeriod)
    }
    else if (satiety !== 0 && !hungerPeriod) {
      hungerPeriod = setInterval(() => {
        setSatiety((prevSatiety) => prevSatiety -= 10);
        console.log(satiety);
        if (satiety === 0) {
          clearInterval(hungerPeriod);
        }
      }, intervalTime)
    }
  }, satiety)

  let onFeeding = () => {
    let Feeding = new Promise((resolve, reject) => {
      if (satiety <= 80) {
        setSatiety(satiety += 20)
      }
      else {
        reject('Животное не голодное');
      }
    });

    Feeding.then(() => {
      setSatiety(satiety += 20)
    }).catch((message) => {
      console.log(message)
    })
  }

  return (
    <>
    <Header />
      <ZooMainStyled>
          <main>
            <ZooMainAnimalsStyled>
              <p className="quote">{quote}</p>
              <button onClick={onFeeding}>Покормить</button>
              <Grid container spacing={0}>
                {animals.map((animal) => (
                  <Grid item sm={12} md={6} key={animal.id}>
                      <div className="borderColor">
                        <h2>
                          {satiety > 80 ? animal.satiety80
                            : satiety > 60 ? animal.satiety60
                              : satiety > 40 ? animal.satiety40
                                : satiety > 0 ? animal.satiety0
                                  : 'Помер'}
                        </h2>
                        <h2>{qweewq}</h2>
                        <img className="cage" src="images/cage.png" alt="cage"/>
                        <img className="animal" src={animal.src} alt="animal"/>
                        <p>{animal.name}</p>
                        <p className="birthDay">Родился - {animal.birthday}</p>
                      </div>
                  </Grid>
                ))}
              </Grid>
            </ZooMainAnimalsStyled>
          </main>
      </ZooMainStyled>

    </>
  );
}

export default Main;
