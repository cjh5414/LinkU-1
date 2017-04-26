import React, {Component} from 'react';
import {Container, Image, Button, Modal} from 'semantic-ui-react'
import Signup from '../signup/Signup.js'
import Login from '../login/Login.js'
import { connect } from 'react-redux';
import * as actions from '../../actions/Login';
import { bindActionCreators } from 'redux';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

class LinkUHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let containerStyle = {
            marginTop: "40px",
        };

        let titleStyle = {
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            marginLeft: '12px',
            color: '#60a2d9'
        };

        let signWrapperStyle = {
            float: 'right',
        };

        let leftButtonStyle = {
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5fa1d7',
            backgroundColor: '#FFFFFF',
            border: '0px'
        };

        let rightButtonStyle={
            marginLeft: '10px',
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5fa1d7',
            backgroundColor: '#FFFFFF',
            border: '0px'
        };

        let signOutButtonStyle={
            float: 'right',
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5fa1d7',
            backgroundColor: '#FFFFFF',
            border: '0px'
        };

        return (
            <Container style={containerStyle}>
                <Image src={DEFAULT_REQUEST_URL+'/media/logo_top.png'} verticalAlign='top'/>
                <span style={titleStyle}>Link U Link University</span>
                {
                    (localStorage.getItem('token') && this.props.loggedIn) ?
                    (
                        <button style={signOutButtonStyle} onClick={this.props.logout}>로그아웃</button>
                    ):
                    (
                        <span style={signWrapperStyle}>
                            <Modal trigger={<button style={leftButtonStyle}>소개</button>}>
                                <Modal.Header>소개</Modal.Header>
                                <Image centered src={DEFAULT_REQUEST_URL+'/media/introduction.jpeg'} />
                            </Modal>
                            <Login triggerButton={<button style={rightButtonStyle}>로그인</button>}/>
                            <Signup buttonStyle={rightButtonStyle}/>
                        </span>
                    )
                }
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps )(LinkUHeader);
