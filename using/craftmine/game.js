class Game {
    constructor(canvas, ctx) {
        /** @type {HTMLCanvasElement} */
        this.canvas = canvas;
        /** @type {CanvasRenderingContext2D} */
        this.ctx = ctx;
        this.currentBlock = "stone";
        this.isDrawing = false;
        this.isMusicPlaying = false;
        this.mousePosition = {x: 0, y: 0};
        this.fps = 60;
        this.renderer = new Render(this);

        this.init();
        console.log("Craftmine Inited. <Game>");
    }

    init() {
        var self = this;

        this.canvas.addEventListener("mousedown", () => this.setDrawing(true));
        this.canvas.addEventListener("mouseup", () => this.setDrawing(false));
        this.canvas.addEventListener("mousemove", (e) => {
            this.mousePosition.x = (e.pageX || e.clientX + document.body.scrollLeft) - parseInt(e.target.offsetLeft);
            this.mousePosition.y = (e.pageY || e.clientY + document.body.scrollTop) - parseInt(e.target.offsetTop);
        });
        this.canvas.addEventListener("mouseleave", () => {
            this.mousePosition = {x: 0, y: 0};
            this.setDrawing(false);
        });
        for(let i = 0; i < document.getElementsByTagName("button").length; i++) {
            document.getElementsByTagName("button")[i].addEventListener("click", function() {
                if(this.getAttribute("data-block") == "$music") {
                    if(!self.isMusicPlaying) {
                        document.getElementById("source:music").play();
                        self.isMusicPlaying = true;
                    } else {
                        document.getElementById("source:music").pause();
                        self.isMusicPlaying = false;
                    }
                } else if(this.getAttribute("data-block") == "$reset") {
                    self.renderer.clearData();
                } else if(this.getAttribute("data-block") == "$save") {
                    self.saveLevel();
                } else if(this.getAttribute("data-block") == "$load") {
                    self.loadLevel();
                } else if(this.getAttribute("data-block") == "$download") {
                    download(self.canvas.toDataURL("image/png"));
                } else {
                    self.setCurrentBlock(this.getAttribute("data-block"));
                }
            });
        }

        this.initBackground();

        setInterval(() => {
            this.renderer.update();
        }, 1000 / this.fps);
    }

    initBackground() {
        var grd = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        grd.addColorStop(0, "rgb(218, 237, 254)");
        grd.addColorStop(0.5, "white");
        grd.addColorStop(1, "white");

        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    saveLevel() {
        var arr_str = this.renderer.map.toString();

        for(let y = 0; y < this.renderer.map.length; y++) {
            for(let x = 0; x < this.renderer.map[y].length; x++) {
                arr_str = arr_str.replace("[object Object]", this.renderer.map[y][x].blockName);
            }
        }

        arr_str = "["+ arr_str +"]";

        var filename = prompt("Please enter the filename: ");
        if(filename != null) {
            download("data:text/plain,"+ arr_str, filename == "" ? "level.cmworld" : filename+".cmworld", "text/plain");
            console.log("Level Saved. <Game.saveLevel>");
            console.log("Filename: "+ filename);
        }
    }

    loadLevel() {
        /** @type {HTMLInputElement} */
        var input = document.getElementById("loadInput");
        input.click();
        input.onchange = () => {
            var fr = new FileReader();
            fr.readAsText(input.files[0]);
            fr.onload = () => {
                var level = fr.result.replace("[", "").replace("]", "").split(",");
                var num = 0;

                for(let y = 0; y < this.renderer.map.length; y++) {
                    for(let x = 0; x < this.renderer.map[y].length; x++) {
                        if(level[num].indexOf("oak_door") != -1) {
                            this.renderer.map[y][x] = new window["oak_door"](level[num].replace("oak_door_", ""));
                        } else {
                            this.renderer.map[y][x] = new window[level[num]](this.renderer);
                        }
                        num++;
                    }
                }

                console.log("Level Loaded. <Game.loadLevel>");
                console.log("Level data: ", level);
            };
        };
    }

    setCurrentBlock(blockName) {
        this.currentBlock = blockName;
    }

    setDrawing(isDrawing) {
        this.isDrawing = isDrawing;
    }
}
