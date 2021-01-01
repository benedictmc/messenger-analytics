import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Statistic } from 'semantic-ui-react'
import LoadingBar from 'react-top-loading-bar'
import { Image, Item } from 'semantic-ui-react'
import { Button, Card, Label, Icon } from 'semantic-ui-react'

// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { Parallax } from 'react-parallax';

import react, {Component, useState, useEffect} from 'react'
import headerimage from './images/new-header.png'; // Tell webpack this JS file uses this image
import otherimage from './images/IMG-1878.JPG'; // Tell webpack this JS file uses this image
import adsimage from './images/IMG-1200.PNG'; // Tell webpack this JS file uses this image

import oneimage from './images/1.jpg'; // Tell webpack this JS file uses this image
import twoimage from './images/2.jpg'; // Tell webpack this JS file uses this image
import threeimage from './images/3.jpg'; // Tell webpack this JS file uses this image
import fourimage from './images/4.jpg'; // Tell webpack this JS file uses this image
import fiveimage from './images/5.jpg'; // Tell webpack this JS file uses this image
import siximage from './images/6.jpg'; // Tell webpack this JS file uses this image






const App = () =>{

  const [progress, setProgress] = useState(0)

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const mimicLoading = async () => {
      let nums = [10,20,40,60,100]
      for (const num of nums) {
          setProgress(num)
          await sleep(200)
        }
  }      

  useEffect(() =>{
      mimicLoading()    
  }, [])

  const inlineStyle = {
    width: '100%',
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
  }
  return (
    <div>
      <LoadingBar color="#C70039" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <img src={headerimage} alt="header" className="header-image"/>
      <div className="content-container">
      <Parallax bgImage={ otherimage }  blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
          <div className="stat-group">
            <h1> Overall Statistics</h1>
              <Statistic.Group size="small" horizontal="true"  className="stats-group">
                <Statistic>
                  <Statistic.Value>5,550</Statistic.Value>
                  <Statistic.Label>Total Messages</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>750</Statistic.Value>
                  <Statistic.Label>Total Reacts</Statistic.Label>
                </Statistic>
                
                <Statistic >  
                  <Statistic.Value>250</Statistic.Value>
                  <Statistic.Label>Total Pictures</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </div>
          </div>
        </div>
      </Parallax>
      <h1 className="divider">| | |</h1>
      <Parallax bgImage={ twoimage } >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <div className="stat-group">
              <h1> Year Statistics</h1>
                <Statistic.Group size="small" horizontal="true"  className="stats-group">
                  <Statistic>
                    <Statistic.Value>5,550</Statistic.Value>
                    <Statistic.Label>Total Messages</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>750</Statistic.Value>
                    <Statistic.Label>Total Reacts</Statistic.Label>
                  </Statistic>
                  
                  <Statistic >
                    <Statistic.Value>250</Statistic.Value>
                    <Statistic.Label>Total Pictures</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </div>
            </div>
        </div>
      </Parallax>
      <h1 className="divider">| | |</h1>
      <Parallax bgImage={ threeimage }  blur={{ min: -1, max: 5 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <div className="stat-group">
              <h1> Year Records</h1>
                <Statistic.Group size="small" horizontal="true"  className="stats-group">
                  <Statistic>
                    <Statistic.Value>11/12/2020 (3,900)</Statistic.Value>
                    <Statistic.Label>Most Messages in one day</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>Febuary (13,900)</Statistic.Value>
                    <Statistic.Label>Most Messages in one month</Statistic.Label>
                  </Statistic>
                  
                  <Statistic >
                    <Statistic.Value>Steve Jobs (250)</Statistic.Value>
                    <Statistic.Label>Person with most Messages</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </div>
            </div>
        </div>
      </Parallax>
      <h1 className="divider">| | |</h1>
      <Parallax 
        bgImage={ adsimage }
        strength={200}
      >
        <div style={{ height: 1000 }}>
          <div style={inlineStyle}>
            <h1> Top Messages</h1>
            <div>
              <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                  />
                  <Card.Header>Ben McGovern</Card.Header>
                  <Card.Meta>12/11/2020</Card.Meta>
                  <Card.Description>
                    Alright lads
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                                    <Label as='a' image>
                    <span role="img" aria-label="sheep">😂</span>
                    19
                  </Label>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😍</span>
                    19
                  </Label>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                  />
                  <Card.Header>Ben McGovern</Card.Header>
                  <Card.Meta>12/11/2020</Card.Meta>
                  <Card.Description>
                    Alright lads
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                                    <Label as='a' image>
                    <span role="img" aria-label="sheep">😂</span>
                    19
                  </Label>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😍</span>
                    19
                  </Label>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                  />
                  <Card.Header>Ben McGovern</Card.Header>
                  <Card.Meta>12/11/2020</Card.Meta>
                  <Card.Description>
                    Alright lads
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                                    <Label as='a' image>
                    <span role="img" aria-label="sheep">😂</span>
                    19
                  </Label>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😍</span>
                    19
                  </Label>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                  />
                  <Card.Header>Ben McGovern</Card.Header>
                  <Card.Meta>12/11/2020</Card.Meta>
                  <Card.Description>
                    Alright lads
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                                    <Label as='a' image>
                    <span role="img" aria-label="sheep">😂</span>
                    19
                  </Label>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😍</span>
                    19
                  </Label>
                </Card.Content>
              </Card>
            </div>


          </div>
        </div>
      </Parallax>
      <Parallax 
        bgImage={ adsimage }
        strength={200}
      >
        <div style={{ height: 2000 }}>
          <div style={inlineStyle}>
            <h1> Top Pictues</h1>
            <div>
              <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                  />
                  <Card.Header>Ben McGovern</Card.Header>
                  <Card.Meta>12/11/2020</Card.Meta>
                  <Card.Description>
                    <Image
                      floated='left'
                      size='medium'
                      src={siximage}
                    />
                    Alright lads
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                                    <Label as='a' image>
                    <span role="img" aria-label="sheep">😂</span>
                    19
                  </Label>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😍</span>
                    19
                  </Label>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                  />
                  <Card.Header>Ben McGovern</Card.Header>
                  <Card.Meta>12/11/2020</Card.Meta>
                  <Card.Description>
                  <Image
                      floated='left'
                      size='medium'
                      src={twoimage}
                    />
                    Alright lads
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😂</span>
                    19
                  </Label>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😍</span>
                    19
                  </Label>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                  />
                  <Card.Header>Ben McGovern</Card.Header>
                  <Card.Meta>12/11/2020</Card.Meta>
                  <Card.Description>
                     <Image
                      floated='left'
                      size='medium'
                      src={threeimage}
                    />
                    Alright lads
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😂</span>
                    19
                  </Label>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😍</span>
                    19
                  </Label>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                  />
                  <Card.Header>Ben McGovern</Card.Header>
                  <Card.Meta>12/11/2020</Card.Meta>
                  <Card.Description>
                     <Image
                      floated='left'
                      size='medium'
                      src={fourimage}
                    />
                    Alright lads
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😂</span>
                    19
                  </Label>
                  <Label as='a' image>
                    <span role="img" aria-label="sheep">😍</span>
                    19
                  </Label>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    </div>
    </div>
  );
}


export default App;

// import './App.css';

// import { Statistic } from 'semantic-ui-react'

// // import { Parallax } from 'react-parallax';
// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//           <h1>Yooo React</h1>

           
          

//       </header>

//       <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
//         <ParallaxLayer offset={0} speed={0.5}>
//           <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
//         </ParallaxLayer>
//       </Parallax>

//     </div>
//   );
// }

// export default App;
