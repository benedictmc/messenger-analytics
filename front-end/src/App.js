import './App.css';
import { Parallax } from 'react-parallax';
import header from './header.png' ;
import wideHeader from './wideHeader.png' ;
import background from './background.png' ;
import roy from './roy.jpg' ;
import niall from './niall.jpg' ;
import cans from './cans.jpg' ;
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { useEffect, useState } from 'react';
import analyticData from './data.json';

const App = () =>{

  const [width, setWidth] = useState(window.innerWidth);

  console.log(analyticData)


  // for 



  return (
    <div>
      {
        width > 500 ? <img src={wideHeader} alt="header" className="header-image"/> : <img src={header} alt="header" className="header-image"/>
      }
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
                         {new Intl.NumberFormat().format(analyticData.alltime_stats.message_total)}  
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Average Messages per Day</CCardTitle>
                      <CCardText>
                        { analyticData.alltime_stats.average_messages_per_day }
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Total Days of Groupchat</CCardTitle>
                      <CCardText>
                        { new Intl.NumberFormat().format(analyticData.alltime_stats.total_days) }  
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Person with Most Messages</CCardTitle>
                      <CCardText>
                        <div>
                          <b>{ analyticData.alltime_stats.most_amount_of_messages_person.name }</b>
                        </div>
                        { new Intl.NumberFormat().format(analyticData.alltime_stats.most_amount_of_messages_person.amount) }  
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Longest Laugh</CCardTitle>
                      <CCardText>
                        <div>
                          <b>{ analyticData.alltime_stats.longest_laugh.sender_name }</b>
                        </div>
                        <div className='message-div'>
                          { analyticData.alltime_stats.longest_laugh.content }
                        </div>
                     
                        <div className="reaction-container-div">
                        {
                          new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }).format(new Date(analyticData.alltime_stats.longest_laugh.timestamp_ms))
                        }
                        </div>
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
                  <h1>Year Statistics</h1>
                </div>
                <div className="content-div">
                <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Total Messages to date</CCardTitle>
                      <CCardText>
                        { new Intl.NumberFormat().format(analyticData.year_stats.message_total) }  
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Average Messages per Day</CCardTitle>
                      <CCardText>
                        { analyticData.year_stats.average_messages_per_day }
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Person with Most Messages</CCardTitle>
                      <CCardText>
                        <div>
                          <b>{ analyticData.year_stats.most_amount_of_messages_person.name }</b>
                        </div>
                        { new Intl.NumberFormat().format(analyticData.year_stats.most_amount_of_messages_person.amount) }  
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '20rem', marginTop: '20px' }}>
                    <CCardBody>
                      <CCardTitle>Longest Laugh</CCardTitle>
                      <CCardText>
                        <div>
                          <b>{ analyticData.year_stats.longest_laugh.sender_name }</b>
                        </div>
                        <div className='message-div'>
                          { analyticData.year_stats.longest_laugh.content }
                        </div>
                        <div className="reaction-container-div">
                        {
                          new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }).format(new Date(analyticData.year_stats.longest_laugh.timestamp_ms))
                        }
                        </div>
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
                  {analyticData.most_reacted_messages.map((message) => (
                    <CCard style={{ width: '20rem', marginTop: '20px' }}>
                      <CCardBody>
                        <CCardTitle>{message.person}</CCardTitle>
                        <CCardText>
                          <div className='message-div'>
                            { message.message }
                          </div>
                          <hr></hr>
                          <div>
                            <b>Total Reactions:  </b>{ message.amount }
                          </div>
                          <div className="reaction-container-div">
                            {
                              message.reactions.map((reaction) => (
                                <div className="reaction-div">{reaction.reaction} { reaction.amount }</div>
                              ))
                            }
                          </div>
                        </CCardText>
                      </CCardBody>
                  </CCard>
                ))}
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
                  {
                    analyticData.most_reacted_photo.map((message) => (
                      <CCard style={{ width: '22rem', marginTop: '20px' }}>
                      <CCardBody>
                          <CCardTitle>{ message.person }</CCardTitle>
                          <CCardText>
                          <CCardImage src={message.photo[0]['uri']}/>
                            { message.message_after ? 
                              <div className='photo-message'>
                                  <b>{message.message_after_person}: </b>{message.message_after} 
                              </div> 
                            : <div></div> }
                            <hr></hr>
                            <div style={{ marginTop: '10px' }}>
                              <b>Total Reactions:  </b>{ message.amount }
                            </div>
                            <div className="reaction-container-div">
                              {
                                message.reactions.map((reaction) => (
                                  <div className="reaction-div">{reaction.reaction} { reaction.amount }</div>
                                ))
                              }
                            </div>
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    ))
                  }
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