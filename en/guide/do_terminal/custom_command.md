# Custom Command

By NriotHrreion

## The Command Executor

In the project folder, `run/executor.js` is the command executors' scripts.

The following is the format of command executors.

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

// Other executors....

module.exports = [
    HelloWorldCommand
];
```

## The Constructor

You can see the constructor in the format.

```javascript
/**
 * 
 * @param {WebSocket.Server} wss 
 */
constructor(wss) {
    this.wss = wss;
}
```

The constructor is for getting the **WebSocket Object**.

## onCommand Event

The `onCommand` Method will be executed after user input a command.

```javascript
onCommand(cmd, args, length) {
    if(args[0] == "helloworld" && args.length > 1) {
        // ...
    }
}
```

### Arguments

- `cmd`: Full command

- `args`: The arguments of the command(Among the arguments, the `args[0]` is the command itself)

- `length`: The length of the command

?> Because of the `args[0]` is the command itself, so you can determine whether the command is the executor's command or not through `if` statement.

## onData Event

After input a command, you can use `control.readLine(flag)` to read the input line, let user input the info.

After user input the info, `onData` Method will be executed.

```javascript
onData(data) {
    if(data.indexOf("#hello ") > -1) {
        // ...
    }
}
```

In the format, the `if` statement is for determining whether the info is you need one or not.

And `"#hello "` is the flag of the info.

### Arguments

- `data`: The info inputed by user(**Including the flag**)

?> Because of the info including the flag, so you can `replace` off the flag when you using it.

## Declare Executor

In the last of the format, you can see:

```javascript
module.exports = [
    HelloWorldCommand
];
```

All the executors must declare here.

!> **Attention!** If you don't declare here, the system will can't find your executor.

## The "echo" Command Example

```javascript
class Echo {
    
    /**
     * 
     * @param {WebSocket.Server} wss 
     */
    constructor(wss) { // get the WebSocket Object
        this.wss = wss;
    }

    onCommand(cmd, args, length) { // onCommand Event
        if(args[0] == "echo" && args.length > 1) { // args[0] is the command
            this.wss.clients.forEach(function(client) { // send a message to client
                client.send(JSON.stringify({
                    action: 'control.writeLine("'+ cmd.replace("echo ", "") +'")' // action script will run on client
                }));
            });
        }
    }
    
    // It also provided the "readLine" method, onData Event is readLine's getting event.
    // You can add this sentence to use this feature when you sending a message to the client:
    // control.readLine("#hello")
    // Among them, "#hello" is the flag, it can be any words.
    //
    // onData(data) {
    //     if(data.indexOf("#hello ") > -1) {
    //         //
    //     }
    // }
}

module.exports = [
    Echo // Must declare your executor here, or it will can't be executed.
];
```
