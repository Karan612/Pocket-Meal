import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
        return(     
            <div className = "Home">                    
                <Link exact to = "/sign-up"><Button class="grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black">I Want To Donate</Button></Link>
                <Link exact to = "/need-help"><Button class="grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib transparent">Need Help</Button></Link>
                <Link exact to = "/volunteer"><Button class="grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib transparent">I Want To Volunteer</Button></Link>
            </div>
        );
    }
}
export default Home;