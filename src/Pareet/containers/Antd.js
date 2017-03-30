import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'antd/dist/antd.css';
import Collapse from 'antd/lib/collapse';
const Panel = Collapse.Panel;

import Tooltip from 'antd/lib/tooltip';
import Icon from 'antd/lib/icon';

//结合antd
export default class Antd extends Component{
    render(){
        const { texts } = this.props;
        return (
            <div className="j-antd">
                <Collapse accordion  defaultActiveKey={['0']}>
                    {
                        texts ? texts.map((item,index) =>{
                            let tip = {
                                date : <div>
                                        <p className="tipsTitle">{ item.title }</p>
                                         <Tooltip placement="topRight" title={ item.tips }> 
                                            <Icon type="question-circle-o" className="iconTip"/>
                                        </Tooltip>
                                    </div>,
                            }
                            return <Panel key={index} header={tip.date}>
                                <p>{ item.context }</p>
                            </Panel>
                        }) : null
                    }
                </Collapse>
            </div>
        )
    }
} 


////mapStateToProps
const mapStateToProps = (state) =>{
    return {
        texts : state.count.text
    }
}


export default connect(mapStateToProps)(Antd)