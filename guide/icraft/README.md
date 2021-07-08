# ICraft

> Minecraft 2D版本仿制游戏

By NriotHrreion

## 介绍

这是Minecraft的2D版本, 可以用来当画板用, 或者也可以拿来玩, 和别人一起联机

如果你想一探究竟ICraft的源码, 可以去这里:

[https://github.com/NriotHrreion/ICraft-App](https://github.com/NriotHrreion/ICraft-App)

如果你只是想试试这个游戏，你可以去这里:

[https://ic-game-df35eb.netlify.app/client](https://ic-game-df35eb.netlify.app/client)

如果你想体验整个游戏, 你可以继续往下看

## 客户端使用

**注意: 在此之前, 请确认你的电脑上已经安装了node.js!!!**

1. 下载游戏至本地

```bash
git clone https://github.com/NriotHrreion/ICraft-App.git
```

2. 在游戏根目录下载依赖

```bash
npm install
```

3. 启动App

```bash
npm run ic-launch
```

4. 用浏览器进入`https://localhost:3000`

5. 开始游戏!

## 服务端使用

如果你想和你的朋友一起玩ICraft, 那你可以尝试在你的电脑上开设一个ICraft服务器

**注意: 在此之前, 请确认你的电脑上已经安装了node.js!!!**

1. 下载游戏至本地

```bash
git clone https://github.com/NriotHrreion/ICraft-App.git
```

2. 在`server/config.json`文件中配置服务器

如果服务端无法找到配置文件中指定的存档文件, 则会自动生成一个新的存档

```json
{
    "serverName": "Server", // 服务器名称
    "serverMotd": "An ICraft Server", // 服务器简介
    "worldName": "world", // 存档名称
    "port": 7000 // 服务器端口
}
```

3. 在游戏根目录启动服务器

```bash
npm run ic-server
```

4. 在ICraft客户端中添加服务器并加入游玩即可!

## 说明

游戏中的大部分方块贴图均来自 **[Mojang Studio](https://www.mojang.com)**, 界面设计参考 **[Minecraft](https://minecraft.net)**

游戏中背景音乐由用户手动调整, 若被告知侵权则会立刻删除

## 许可

[MIT](https://raw.githubusercontent.com/NriotHrreion/ICraft-App/release/LICENSE)
