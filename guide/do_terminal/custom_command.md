# 自定义指令

By NriotHrreion

## 指令执行器

在工程根目录下的`run/executor.js`为指令执行器脚本

下面是一个指令执行器的格式

```javascript
class HelloWorldCommand {
    
    /**
     * 
     * @param {WebSocket.Server} wss 
     */
    constructor(wss) {
        this.wss = wss;
    }

    onCommand(cmd, args, length) {
        if(args[0] == "helloworld" && args.length > 1) {
            // ...
        }
    }

    onData(data) {
        if(data.indexOf("#hello ") > -1) {
            // ...
        }
    }
}

// 其他执行器....

module.exports = [
    HelloWorldCommand
];
```

## 类构造器

可以在上面的格式中看到, 执行器中有一个类构造器

```javascript
/**
 * 
 * @param {WebSocket.Server} wss 
 */
constructor(wss) {
    this.wss = wss;
}
```

这个类构造器是为了获取API提供的**WebSocket对象**.

## onCommand事件

`onCommand`方法是指令被输入之后执行的方法.

```javascript
onCommand(cmd, args, length) {
    if(args[0] == "helloworld" && args.length > 1) {
        // ...
    }
}
```

### 参数传入

- `cmd`: 用户输入的全部指令

- `args`: 指令传入的参数(其中, `args[0]`为指令本身)

- `length`: 指令长度

?> 因为`args[0]`为指令本身, 所以你可以通过`if`语句来判断用户输入的指令是否是这个执行器所对应的指令.

## onData事件

在输入指令后, 你可以使用`control.readLine(flag)`在终端界面弹出输入框, 让用户输入信息.

用户输入信息后, 即调用`onData`方法.

```javascript
onData(data) {
    if(data.indexOf("#hello ") > -1) {
        // ...
    }
}
```

上面格式中的`if`语句是用来判断用户输入的信息是否是你要求输入的信息.

`"#hello "`为输入信息的标签

### 参数传入

- `data`: 输入的信息(**包括标签**)

?> 因为输入的信息中包括标签, 所以使用时可以`replace`掉.

## 执行器声明

在上面执行器格式的最后, 你会看到:

```javascript
module.exports = [
    HelloWorldCommand
];
```

所有执行器必须在这里这个地方声明.

!> **注意!** 如果没有在这里声明, 系统将不会执行到你的执行器

## echo指令示例

```javascript
class Echo {
    
    /**
     * 
     * @param {WebSocket.Server} wss 
     */
    constructor(wss) { // 获取WebSocket服务器对象
        this.wss = wss;
    }

    onCommand(cmd, args, length) { // 指令接收事件
        if(args[0] == "echo" && args.length > 1) { // args[0] 是用户发送的指令
            this.wss.clients.forEach(function(client) { // 向客户端发送消息
                client.send(JSON.stringify({
                    action: 'control.writeLine("'+ cmd.replace("echo ", "") +'")' // action 是在客户端运行的js代码
                }));
            });
        }
    }
    
    // 这里还有提供readline方法, onData 是readline接收事件
    // 你可以在向客户端发送消息的时候, 在action里面加上这一句来使用这个功能:
    // control.readLine("#hello")
    // 在这其中, "#hello" 是标记符号, 可以是任何字符
    //
    // onData(data) {
    //     if(data.indexOf("#hello ") > -1) {
    //         //
    //     }
    // }
}

module.exports = [
    Echo // 一定要在这里写上新创建的指令类，否则无效
];
```
