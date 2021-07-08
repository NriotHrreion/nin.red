# ICraft

> Minecraft 2D Version

By NriotHrreion

## Description

This is a 2D version of Minecraft, and it can be using as a drawing board. You can also play it with other guys.

If you'd like to see ICraft's source code, you can see:

[https://github.com/NriotHrreion/ICraft-App](https://github.com/NriotHrreion/ICraft-App)

If you just want to try the game, you can see:

[https://ic-game-df35eb.netlify.app/client](https://ic-game-df35eb.netlify.app/client)

If you'd like to enjoy the whole game, please read the following carefully

## Client Usage

**Attention: Before it, please be sure you installed node.js on your computer!!!**

1. Download the game

```bash
git clone https://github.com/NriotHrreion/ICraft-App.git
```

2. Install the dependency at the root directory of the game

```bash
npm install
```

3. Launch the App

```bash
npm run ic-launch
```

4. Open your browser and enter the URL: `https://localhost:3000`

5. Enjoy the game!

## Server Usage

If you want to play ICraft with your friends, you can try to open a ICraft server on your computer

**Attention: Before it, please be sure you installed node.js on your computer!!!**

1. Download the game

```bash
git clone https://github.com/NriotHrreion/ICraft-App.git
```

2. Configure the server at `server/config.json`

If the server cannot find the specified world file, it will generate a new one automatically

```json
{
    "serverName": "Server", // Server Name
    "serverMotd": "An ICraft Server", // Server Motd
    "worldName": "world", // World File Name
    "port": 7000 // Server Port
}
```

3. Launch the server at the root directory of the game

```bash
npm run ic-server
```

4. Add the server to the ICraft client and join in it, and you can play with other guys!

## Explanation

The most icons of the blocks in the game are all from **[Mojang Studio](https://www.mojang.com)**, layout design reference **[Minecraft](https://minecraft.net)**

The BGM in the game is adjust by users manually. If notified of infringement, it will be deleted immediately

## LICENSE

[MIT](https://raw.githubusercontent.com/NriotHrreion/ICraft-App/release/LICENSE)
