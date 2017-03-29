import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBarData } from '../actions/action'
import '../index.scss'

import 'antd/dist/antd.css';
import Table from 'antd/lib/table';




//动态表格数据
export default class Bar extends Component{

    componentDidMount (){
        this.props._fetchBarData();  //初始化就调用获取列表数据方法
    }

    render(){
        const { obtData } = this.props;

        const columns = [{
            title : 'ID',    //表格头显示的文字
            dataIndex : 'id',  //对应接口中的 字段
            key : 'id',
        },{
            title : '活动名称',
            dataIndex : 'title',
            key : 'title',
        },{
            title : '活动经费',
            dataIndex : 'visit_count',
            key : 'visit_count',
            render : (text , record) =>{
                return <span>
                    { record.visit_count>10000 ? 
                    (record.visit_count/10000).toFixed(2) + 'W' 
                    :(record.visit_count>1000 ? (record.visit_count/1000).toFixed(2) + 'K' : record.visit_count) }
                </span>
            }
        },{
            title : '开始日期',
            dataIndex : 'create_at',
            key : 'create_at',
        },{
            title : '结束日期',
            dataIndex : 'last_reply_at',
            key : 'last_reply_at',
        },{
            title : '是否好玩',
            dataIndex : 'good',
            key : 'good',
            render: (text, record) =>{
                return <span>{record.good ? '是' : '否'}</span>
            }
        },{
            title : '是否已缴费',
            dataIndex : 'top',
            key : 'top',
            render : (text , record) =>{
                return <span>{ record.top ? '是' : '否' }</span>
            }
        },{
            title : '操作',
            dataIndex : 'opera',
            key : 'opera',
            render : () =>{
                return <div>
                    <a onClick={() => alert('添加')}>添加</a>  <a onClick={() => alert('删除')}>删除</a>
                </div>
            }
        }];
        return (
            <div className="j-bar">
                <Table columns={columns} dataSource={obtData.data}/>
            </div>
        )
    }
}


////mapStateToProps
const mapStateToProps = (state) =>{
    return {
        obtData : state.count.data
    }
}


//mapDispatchToProps
const mapDispatchToProps = (dispatch) =>{
    return {
        _fetchBarData : () =>{
            dispatch(fetchBarData())
        }
    }
} 


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bar)