import './App.css';
import { Parallax } from 'react-parallax';
import header from './header.png' ;
import background from './background.png' ;
import roy from './roy.jpg' ;
import niall from './niall.jpg' ;
import cans from './cans.jpg' ;
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

const App = () =>{

  return (
    <div>
      <img src={header} alt="header" className="header-image"/>
      <div className="content-container">
        <Parallax bgImage={ background } >
          <div className='parallax-div' >
              <div >
                <div className="heading-div">
                  <h1>All Time Statistics</h1>
                </div>
                <div className="content-div">
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Total Messages to date</CCardTitle>
                      <CCardText>
                      100,290
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '18rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Total Messages to date</CCardTitle>
                      <CCardText>
                      100,290
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '18rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Total Messages to date</CCardTitle>
                      <CCardText>
                      100,290
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </div>
              </div>
          </div>
        </Parallax>
        <div className='space-div'></div>
        <Parallax bgImage={ roy }  >
          <div className='parallax-div' >
              <div >
                <div className="heading-div" style={{background: "rgb(114, 187, 117)"}}>
                  <h1>All Time Statistics</h1>
                </div>
                <div className="content-div">
                  <CCard style={{ width: '18rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Total Messages to date</CCardTitle>
                      <CCardText>
                      100,290
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '18rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Total Messages to date</CCardTitle>
                      <CCardText>
                      100,290
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '18rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Total Messages to date</CCardTitle>
                      <CCardText>
                      100,290
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </div>
              </div>
          </div>
        </Parallax>
        <div className='space-div' style={{background: "rgb(0, 168, 177)"}}></div>
        <Parallax bgImage={ niall } >
          <div className='parallax-div' >
              <div >
                <div className="heading-div" style={{background: "rgb(0, 168, 177)"}}>
                  <h1>Most Liked Messages</h1>
                </div>
                <div className="content-div">
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Stephen Murray</CCardTitle>
                      <CCardText>
                        <div className='message-div'>
                          dsoakdokaokdoka ifhiashfih
                        </div>
                        <div>
                          <b>Total Reactions:  </b>19
                        </div>
                        <div className="reaction-container-div">
                          <div className="reaction-div">👏 16</div>
                          <div className="reaction-div">👏 3</div>
                        </div>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                  <CCardBody>
                      <CCardTitle>Stephen Murray</CCardTitle>
                      <CCardText>
                        <div className='message-div'>
                          leave it out, this is a very long message toto sofj afos ashifia hsf asfhiahf  afhasifh afihaf asifh afiha fiahf ahfaifh iahf aihsf aifh
                        </div>
                        <div>
                          <b>Total Reactions:  </b>19
                        </div>
                        <div className="reaction-container-div">
                          <div className="reaction-div">👏 16</div>
                          <div className="reaction-div">👏 3</div>
                        </div>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                  <CCardBody>
                      <CCardTitle>Stephen Murray</CCardTitle>
                      <CCardText>
                        <div className='message-div'>
                          this is a very long message toto sofj afos ashifia hsf asfhiahf  afhasifh afihaf asifh afiha fiahf ahfaifh iahf aihsf aifh
                        </div>
                        <div>
                          <b>Total Reactions:  </b>19
                        </div>
                        <div className="reaction-container-div">
                          <div className="reaction-div">👏 16</div>
                          <div className="reaction-div">👏 3</div>
                        </div>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </div>
              </div>
          </div>
        </Parallax>
        <div className='space-div' style={{background: "#96be25"}}></div>
        <Parallax bgImage={ cans } >
          <div className='parallax-div' >
              <div >
                <div className="heading-div" style={{background: "#96be25"}}>
                  <h1>Most Liked Pictures</h1>
                </div>
                <div className="content-div">
                  <CCard style={{ width: '22rem', marginTop: '20px' }}>
                  <CCardBody>
                      <CCardTitle>Stephen Murray</CCardTitle>
                      <CCardText>
                      <CCardImage src={roy}/>
                        <div>
                          <b>Total Reactions:  </b>19
                        </div>
                        <div className="reaction-container-div">
                          <div className="reaction-div">👏 16</div>
                          <div className="reaction-div">👏 3</div>
                        </div>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '22rem', marginTop: '20px' }}>
                  <CCardBody>
                      <CCardTitle>Stephen Murray</CCardTitle>
                      <CCardText>
                      <CCardImage src={roy}/>
                        <div>
                          <b>Total Reactions:  </b>19
                        </div>
                        <div className="reaction-container-div">
                          <div className="reaction-div">👏 16</div>
                          <div className="reaction-div">👏 3</div>
                        </div>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '22rem', marginTop: '20px' }}>
                  <CCardBody>
                      <CCardTitle>Stephen Murray</CCardTitle>
                      <CCardText>
                      <CCardImage src={roy}/>
                        <div>
                          <b>Total Reactions:  </b>19
                        </div>
                        <div className="reaction-container-div">
                          <div className="reaction-div">👏 16</div>
                          <div className="reaction-div">👏 3</div>
                        </div>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '22rem', marginTop: '20px' }}>
                  <CCardBody>
                      <CCardTitle>Stephen Murray</CCardTitle>
                      <CCardText>
                      <CCardImage src={roy}/>
                        <div>
                          <b>Total Reactions:  </b>19
                        </div>
                        <div className="reaction-container-div">
                          <div className="reaction-div">👏 16</div>
                          <div className="reaction-div">👏 3</div>
                        </div>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </div>
              </div>
          </div>
        </Parallax>

        {/* <div style={{ height: '10vh' }}></div> */}
      </div>
    </div>
  );
}


export default App;