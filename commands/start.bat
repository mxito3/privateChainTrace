@echo off
setlocal enabledelayedexpansion   rem 启动变量延迟
set port=10000
set rpcport=8545
set nodeIndex=0
cd D:\share
for %%i in (1=2=3=4=5) do (
	set /a port+=1
	set /a rpcport+=1
	set /a nodeIndex+=1
	rem 开启变量延迟之后引用变量用！var！
	start "node!nodeIndex!" geth --datadir "node!nodeIndex!"/data --mine  --networkid 2333 --port !port! --ipcdisable --rpc --rpccorsdomain "*"  --rpcapi "personal,eth,miner" --rpcaddr 0.0.0.0 --rpcport !rpcport! --cache 200 --cache.gc 4 
		)



