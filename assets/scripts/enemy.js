cc.Class({
    extends: cc.Component,


    onLoad() {
        cc.game.on('gameover',function() {
            this.frameinit();
        },this)
        cc.loader.loadResDir("123", cc.SpriteFrame, function (err, assets, urls) {
            if (err) {
                cc.error(err);
                return;
            }
            this.sprite = assets;
            this.frameinit();          
        }.bind(this));
    },
    
    nextenemy() {
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.count];
        this.node.opacity =255;
        this.count ++;
        if(this.count >= this.sprite.length){
            this.count = 0;
        }
    },
    
    frameinit() {
        
        this.count = 0;
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.count];
        this.count++;
    }
})