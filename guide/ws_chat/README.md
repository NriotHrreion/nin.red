# 网络聊天室

> 一个简易的 `Nodejs` + `Websocket` 聊天室

By NriotHrreion

## 介绍

这个聊天室是使用`Node.js`与`WebSocket`搭建的, 支持消息、图片的发送.

你可以将这个聊天室部署在一台服务器上, 让你的朋友进入你的聊天室一起聊天~

## 使用

在使用之前, 你需要安装[Node.js](https://nodejs.org).

首先, 下载聊天室到你的电脑上

```bash
$ git clone https://github.com/NriotHrreion/chat-server.git
```

接着, 进入工程根目录, 安装依赖

```bash
$ npm install
```

将服务器部署在`localhost`上

```bash
$ node index
```

在浏览器输入地址, 进入聊天室

```
http://localhost:8920
```

!> **注意!** 聊天室占用两个端口(**8920/3500**), 若有其他进程使用, 请自行修改端口.

## 许可

[MIT](https://raw.githubusercontent.com/NriotHrreion/chat-server/master/LICENSE)
