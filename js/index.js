let draw = function () {
    let canvas = document.getElementById('page3'),
        deviceWidth = document.documentElement.clientWidth,
        deviceHeight = document.documentElement.clientHeight,
        bg = new Image();
    bg.src = './img/3.jpg';
    // console.log("设备宽"+deviceWidth);
    // console.log("设备高"+document.documentElement.clientHeight);
    /*
    * 根据设备设置画布大小
    * */
    if (deviceWidth < 1080) {
        canvas.width = deviceWidth;
        canvas.height = deviceHeight;
    } else {
        canvas.width = 392;
        canvas.height = 636;
    }
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        bg.onload = function () {
            /*
            * 重新定义图像大小
            * */
            bg.width = canvas.width;
            bg.height = canvas.height;
            console.log(this.height + ":" + this.width);
            ctx.drawImage(bg, 0, 0, this.width, this.height);
        }
    } else {
        alert("异常");
    }
}
