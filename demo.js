var content = document.getElementsByClassName('content')[0];
var val = document.getElementsByClassName('val')[0];
var text = document.getElementsByClassName('text')[0];
// var file,
//     step = 1024*1024,
//     reader = new FileReader(),
//     total,
//     loaded = 0;  //已经上传了多少  


content.addEventListener('dragover',function(e){
    e.preventDefault();
});
content.addEventListener('drop',function(e){
    e.preventDefault();   //取消浏览器打开视频的默认效果
    file = e.dataTransfer.files[0];
    // total = file.size;
    var loader = new FileLoader(file,events);
    // readBlob(reader,0,step);
    // bindEvent();
});
var events = {
    // 上传过程
    progressIng:function(per){
        val.style.width = per * 250 +'px';
        text.innerHTML =Math.round( per * 100) +'%';
    },
    //一小段上传的结果
    stepLoad:function(loaded){
    console.log("上传"+loaded+"部分");        
    },
    // 结束操作
    finish:function(){
        console.log('我终于上传完成了');
    }
}
// //读取文件
// function readBlob(reader,start,step){
//      if(file.slice){
//         var blob = file.slice(start,start + step);
//      }else{
//         var blob = file;
//      }
//      reader.readAsText(blob);
// }
// function bindEvent(){
//     reader.onprogress = function(e){
//        onProgress( e.loaded);
//     }
//     reader.onload = function(){
//          onLoad();
//     }
// }
// function onProgress(num){
//     loaded += num;
//     var per = loaded / total;
//     if(per > 1){
//        per = 1;
//     }
//     // val.style.width = per * 250 +'px';
//     // text.innerHTML =Math.round( per * 100) +'%';
//     events.progressIng(per);

// }
// function onLoad(){
//     //执行文件上传的操作
//     var result = reader.result;
//     // console.log("上传"+loaded+"部分");
//     events.stepLoad(loaded);
//     if(loaded < total){
//           readBlob(reader,loaded,step);
//     }else{
//         // console.log('我终于上传完成了');
//         events.finish();
//     }
// }