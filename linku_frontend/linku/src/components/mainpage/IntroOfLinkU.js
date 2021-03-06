import React from 'react';
import {Container, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import {Link} from 'react-router-dom';
import LinkUGuide from '../guide_page/LinkUGuide';

class IntroOfLinkU extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: true }
    }

    handleOpen = (e) => this.setState({
      modalOpen: true,
    })

    handleClose = (e) => this.setState({
      modalOpen: false,
    })

    render() {
        let containerStyle = {
            marginTop: '30px',
            textAlign: "center",
        }

        let promotionWordStyle = {
            width: "100%",
            fontSize: '19pt',
            lineHeight: '40px',
        };

        let guideButtonStyle = {
            marginTop: '5px',
            color: '#5fa1d7',
            backgroundColor: '#FFFFFF',
            border: '0px',
            fontSize: '23px'
        }

        return (
            <Container centered style={containerStyle}>
                <div style={promotionWordStyle}>
                    링쿠는 다같이 <b style={{color:'#60a2d9'}}>먹고 놀며 친해지는</b><br/>
                    <b style={{color:'#60a2d9'}}>대학생</b> 친구/모임 연결 서비스 입니다.<br/>
                    <Link to='/about' style={guideButtonStyle}>이용안내></Link>
                </div>
            </Container>
        );
    }

}

export default IntroOfLinkU;
