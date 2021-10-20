import React, { Component } from 'react';
import './GoToTop.css'

class GoToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    BacktoTop(){
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }
    render() { 
        return ( 
            <div onClick='BacktoTop()'>
            <a href='top'>
                <div className='box'>
                    <div className='tcont'>
                        <div className='tl t'></div>
                        <div className='tr t'></div>
                    </div>
                    <div className='tcont'>
                        <div className='tl t'></div>
                        <div className='tr t'></div>
                    </div>
                    <div className='tcont'>
                        <div className='tl t'></div>
                        <div className='tr t'></div>
                    </div>
                </div>
            </a>
        </div>
         );
    }
}
 export default GoToTop;