import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../index.scss'

import { fetchMovie  } from '../actions/action'

export default class Movie extends Component{

    componentDidMount(){
        this.props._fetchMovie(); //初始化
    }

    render(){
        const { lists } = this.props;
        return (
            <div className="j-movie">
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>影片名称</td>
                            <td>价格(元)</td>
                            <td>点击次数</td>
                            <td>点击率(%)</td>
                            <td>票房</td>
                            <td>状态</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            lists ? lists.map((item,index) =>{
                                return (
                                    <tr key={index}>
                                        <td>{ item.key }</td>
                                        <td>{ item.name }</td>
                                        <td>{ item.clickPrice }</td>
                                        <td>{ item.clickNum }</td>
                                        <td>{ item.clickRate }%</td>
                                        <td>{ item.exp >=10000 ? (item.exp/10000).toFixed(2) + '亿' : item.exp + '万' }</td>
                                        <td>{ item.status }</td>
                                        <td><a href={item.expURL} target='_blank'>点击前往</a> </td>
                                    </tr>
                                )
                            }) : null
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}




//mapStateToProps
const mapStateToProps = (state) =>{
    return {
        lists : state.movie.datas
    }
}

//mapDispatchToProps
const mapDispatchToProps = (dispatch) =>{
    return {
        _fetchMovie : () =>{
            dispatch(fetchMovie())
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie)