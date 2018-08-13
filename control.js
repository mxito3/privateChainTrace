/*
 * @Author: YP
 * @Date:   2018-08-13 22:33:33
 * @Last Modified by:   YP
 * @Last Modified time: 2018-08-13 23:57:06
 */
Web3 = require('web3');

var App = {
     mint:function(peerIndex) {
        var indexStart = 9998;
        w3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + (indexStart + peerIndex)));
        if(w3.isConnected())
        {
        	console.log("连接成功");
        	console.log(w3);
        }
        else
        {
        	console.log("连接失败");
        }
    }
};
App.mint(1);