'use strict';

module.exports = {
    getData : {
        url : 'https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312',
        options : {
            method : 'GET'
        }
    },
    fetchPosts : {
        url : 'https://hacker-news.firebaseio.com/v0/jobstories.json',
        options : {
            method : 'GET'
        }
    },
    fetchListData : {
        url : 'https://cnodejs.org/api/v1/topics',
        options : {
            method : 'GET'
        }
    },
    fetchList : {  //新的练习获取原始数据
        url : 'http://114.215.80.72:4545/article/fetchList',
        options : {
            method : 'GET'
        }
    },
    giveStar : {    //点赞
        url : 'http://114.215.80.72:4545/article/giveStar',
        options : {
            method : 'POST'
        }
    },
    register : {  //注册
        url : 'http://114.215.80.72:4545/user/register',
        options : {
            method : 'POST'
        }
    },
    pulish : {  //发表
        url : 'http://114.215.80.72:4545/article/pulish',
        options : {
            method : 'POST'
        }
    },
    comments : {  //评论
        url : 'http://114.215.80.72:4545/article/comment',
        options : {
            method : 'POST'
        }
    },
    comments : {  //登录
        url : 'http://114.215.80.72:4545/user/login',
        options : {
            method : 'POST'
        }
    }
}






