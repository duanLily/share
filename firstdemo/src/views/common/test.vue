<template>
  <div class="demo-image">
    <el-image v-for="url in urls" :key="url" :src="url" :lazy="lazyI" :scroll-container="scrollContainer"></el-image>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lazyI: true,
        scrollContainer:document.getElementsByClassName("demo-image"),
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    },
    methods:{
      download1(loadAddress, id) {
        // 下载产品
        let files = {};
        files.name = "作品压缩包";
        // files.filePath = loadAddress
        let notifyinfo = this.$notify({
          title: '正在下载产品...',
          iconClass:'el-icon-loading'
        });
        let filePath = loadAddress;
        request.requestDownload({ filePath }).then((res) => {
          console.log("000000", res);
          const blob = new Blob([res], { type: res.type });
          const downloadElement = document.createElement("a");
          const href = window.URL.createObjectURL(blob); //创建下载的链接
          downloadElement.href = href;
          downloadElement.download = files.name; //下载后文件名
          document.body.appendChild(downloadElement);
          downloadElement.click(); //点击下载
          document.body.removeChild(downloadElement); //下载完成移除元素
          window.URL.revokeObjectURL(href); //释放blob对象
          // 新增下载记录
          let downloadAdd = {
            opertionName: "dl_records_save",
            params: {
              product_dl_records$pdlr_product: id,
            },
          };
          request.request(JSON.stringify(downloadAdd)).then((res) => {
            console.log(res);
            notifyinfo.close();
            if(res.results) {
              this.selectSearchLish()
            }
          }).catch((err) => {
            console.log(err);
          });
        }).catch((err) => {
          console.log(err);
        });
      }



      createMarker(x, y, divName) {
        let marker = document.getElementById(divName).getElementsByTagName('img');
        if(marker.length > 0) {
          for(let i = 0;i < marker.length; i++) {
            if(marker[i].className.indexOf('marker') !== -1) {
              marker[i].parentNode.removeChild(marker[i])
            }
          }
        }
        // this.form.xAxis = x;
        // this.form.yAxis = y;
        this.form.shipPlace = `X：${x}，Y：${y}`;
        let img = document.createElement('img');
        img.className = 'marker';
        img.src = require("../../../../public/libs/maplib/icons/camera1.png");
        img.style.left = x + 'px';
        img.style.top = y + 'px';
        img.style.position = "absolute";
        img.style.pointerEvents = "none";
        document.getElementById(divName).appendChild(img);
      },

    }
  }
</script>
<style>
  .demo-image {
    height: 400px;
  }
  .demo-image .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
  }
</style>
