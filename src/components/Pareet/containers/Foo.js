import React, { Component } from 'react'
import { addStaticData , deleteStaticData } from '../actions/action'
import { connect } from 'react-redux'
import '../index.scss'

import Modal from 'antd/lib/modal';
const confirm = Modal.confirm;


export default class Foo extends Component{
    handleKeyUp(e){
        if (e.keyCode === 13) {
            let txt = {
                news : e.target.value
            };
            if (!txt) return;
            this.props._addStaticData(txt);
            e.target.value = '';
        }
    }
    // handleDelete(index){
    //     Modal.confirm({
    //         title: '删除？',
    //         content: '你确定删除这条信息',
    //         onOk : (index) =>{
    //             console.log('ok');
    //             this.props._deleteStaticData(index);  //ok确定后弹窗不关闭
    //         },
    //         onCancel : () =>{
    //             console.log('Cancel');
    //         }
    //     });
    // }
              
    render(){
        const { lists , _deleteStaticData } = this.props;
        return (
            <div className="j-foo">
                <input type="text" className="fooText" onKeyUp={ this.handleKeyUp.bind(this)} placeholder="请输入信息回车确认"/>
                <dl className="nav-dl">
                    {
                        lists.map((item,index) =>{
                            {/*return <dt key={index}>{index+1} { item.news } <a onClick={ this.handleDelete.bind(this,index) }>删除</a></dt>*/}
                            return <dt key={index}>{index+1} { item.news } <a onClick={ () => _deleteStaticData(index) }>删除</a></dt>
                        })
                    }
                </dl>
            </div>
        )
    }
}


//mapStateToProps
const mapStateToProps = (state) =>{
    return {
        lists : state.staticData  //获取静态数据
    }
}

//mapDispatchToProps
const mapDispatchToProps = (dispatch) =>{
    return {
        _addStaticData : (txt) =>{
            dispatch(addStaticData(txt))
        },
        _deleteStaticData : (id) =>{
            dispatch(deleteStaticData(id))
        }
    }
} 


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Foo)
