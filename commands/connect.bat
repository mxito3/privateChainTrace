@echo off
setlocal enabledelayedexpansion   rem 启动变量延迟
set rpcport=8545
set nodeIndex=0
for %%i in (1=2=3=4=5) do (
	set /a rpcport+=1
	set /a nodeIndex+=1
	start "connectNode!nodeIndex!" geth attach "http://localhost:!rpcport!" pause
	)

