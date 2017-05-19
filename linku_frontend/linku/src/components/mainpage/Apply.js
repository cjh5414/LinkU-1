import React from 'react';
import {Button, Modal, Image, Container } from 'semantic-ui-react';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';
import { withRouter } from 'react-router-dom';

class Apply extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <Button onClick={() => this.props.history.push('/payment-description'
                + '?'
                + 'selectedValue=' + this.props.selectedValue + "&"
                + 'paymentInfo=' + this.props.paymentInfo + "&"
                + 'isCurrent=' + this.props.isCurrent + "&"
                + 'isPrearranged=' + this.props.isPrearranged)} color='blue' fluid>같이 놀자!</Button>
        )
    }

}

export default withRouter(Apply);
