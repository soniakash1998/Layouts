import React, {Component} from 'react';
import {InputGroup, FormControl, Button, Container}from 'react-bootstrap';
import Aux from '../../hoc/Aux';
import classes from './PrivateChat.module.css';
import PrivateChatTemp from './PrivateChatTemp';
import IncomingMsg from './IncomingMsg';
import OutgoingMsg from './OutgoingMsg';
import { FaSearch } from 'react-icons/fa';

class PrivateChat extends Component{
    render() {
        
        return (
            <Aux>
               <Container>
                <div className={classes.messaging}>
                  <div className={classes.inbox_msg}>
                    <div className={classes.inbox_people}>
                      <div className={classes.headind_srch}>
                        <div className={classes.recent_heading}>
                          <h4>Recent</h4>
                        </div>
                        <div className={classes.srch_bar}>
                          <div className="stylish-input-group">
                            <input type="text" class="search-bar"  placeholder="Search" />
                            <span className="input-group-addon">
                                <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                            </span> 
                          </div>
                        </div>
                      </div>
                      <div className={classes.inbox_chat}>
                        <div className={[classes.chat_list, classes.active_chat].join(' ')}>
                          <div className={classes.chat_people}>
                            <div className={classes.chat_img}> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                            <div className={classes.chat_ib}>
                              <h5>Sunil Rajput <span className={classes.chat_date}>Dec 25</span></h5>
                              <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                          </div>
                        </div>
                        <PrivateChatTemp 
                          imageURL = "https://ptetutorials.com/images/user-profile.png"
                          name = 'Sunil'
                          date = 'Dec 25'
                          message = 'Test, which is a new approach to have all solutions 
                          astrology under one roof.'/>
                        
                        <PrivateChatTemp 
                          imageURL = "https://ptetutorials.com/images/user-profile.png"
                          name = 'Sunil'
                          date = 'Dec 25'
                          message = 'Test, which is a new approach to have all solutions 
                          astrology under one roof.'/>
                        
                        <PrivateChatTemp 
                          imageURL = "https://ptetutorials.com/images/user-profile.png"
                          name = 'Sunil'
                          date = 'Dec 25'
                          message = 'Test, which is a new approach to have all solutions 
                          astrology under one roof.'/>
                        
                        <PrivateChatTemp 
                          imageURL = "https://ptetutorials.com/images/user-profile.png"
                          name = 'Sunil'
                          date = 'Dec 25'
                          message = 'Test, which is a new approach to have all solutions 
                          astrology under one roof.'/>
                        
                        <PrivateChatTemp 
                          imageURL = "https://ptetutorials.com/images/user-profile.png"
                          name = 'Sunil'
                          date = 'Dec 25'
                          message = 'Test, which is a new approach to have all solutions 
                          astrology under one roof.'/>
                        
                        <PrivateChatTemp 
                          imageURL = "https://ptetutorials.com/images/user-profile.png"
                          name = 'Sunil'
                          date = 'Dec 25'
                          message = 'Test, which is a new approach to have all solutions 
                          astrology under one roof.'/>
                        
                      </div>
                    </div>
                    <div className={classes.mesgs}>
                      <div className={classes.msg_history}>
                        <IncomingMsg 
                        imageURL = "https://ptetutorials.com/images/user-profile.png"
                        message = "Test which is a new approach to have all solutions"
                        timeDate = '11:01 AM    |    June 9'/>
                        
                        <OutgoingMsg 
                          message = 'Apollo University, Delhi, India Test'
                          timeDate = '11:01 AM    |    Today'/>
                          
                        <IncomingMsg 
                        imageURL = "https://ptetutorials.com/images/user-profile.png"
                        message = "Test which is a new approach to have all solutions"
                        timeDate = '11:01 AM    |    June 9'/>

                        <OutgoingMsg 
                          message = 'Apollo University, Delhi, India Test'
                          timeDate = '11:01 AM    |    Today'/>
                          
                        <IncomingMsg 
                        imageURL = "https://ptetutorials.com/images/user-profile.png"
                        message = "Test which is a new approach to have all solutions"
                        timeDate = '11:01 AM    |    June 9'/>

                      </div>
                      <div className={classes.type_msg}>
                        <div className={classes.input_msg_write}>
                          <input type="text" className={classes.write_msg} placeholder="Type a message" />
                          <button className={classes.msg_send_btn} type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </Container>
        </Aux>      
        );
    }
}

export default PrivateChat;