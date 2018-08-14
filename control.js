/*
 * @Author: YP
 * @Date:   2018-08-14 10:18:20
 * @Last Modified by:   YP
 * @Last Modified time: 2018-08-14 13:32:29
 */
Web3 = require('web3');

var App = {
    web3: [],
    init: function(peerIndex) {
        var indexStart = 8545;
        for (let i = 1; i <= 5; i++) {
            App.web3[i] = new Web3(new Web3.providers.HttpProvider("http://localhost:" + (i + indexStart)));
            if (App.web3[i].isConnected()) {
                console.log("连接第"+i+"个节点成功");
                // -console.log(w3);
                // w3.miner.start();
            } else {
                console.log("连接失败");
            }
            // indexStart++;
        }


    },
    unlock: function() {
    
        for (let i = 1; i <= 5; i++)
        {
            // console.log(App.web3[i].eth.coinbase);
            if(i==1)
            {
                App.web3[i].personal.unlockAccount(App.web3[i].eth.coinbase,"domore0325",100000000,App.callback);

            }
            else
            {
                App.web3[i].personal.unlockAccount(App.web3[i].eth.coinbase,"123456",100000000,App.callback);
            }
        }
    },
    callback: function(error,data)
    {
        if(!error)
        {
            console.log(data);
        }
        else
        {
            console.log(error);
        }
    },
    getCoinbase:function()
    {
        for (let i = 1; i <= 5; i++)
        {
            console.log(i+"         "+App.web3[i].eth.coinbase) ;   
        }
        
    }

};
App.init();
App.unlock();
App.getCoinbase();