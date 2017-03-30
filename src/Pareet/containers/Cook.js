import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'whatwg-fetch'    
import 'es6-promise' 

export default class Cook extends Component{


    cook(){
        
    }

    componentDidMount(){
        this.cook()
    }

    render(){
        return (
            <div className="j-cook">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <div className="cookBtn">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}