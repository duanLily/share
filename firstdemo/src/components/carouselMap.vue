<template>
  <div class="carousel-map">
    <div class="switch-icon" style="left: 0;" @click="moveLeft">
      <i class="el-icon-arrow-left" style="line-height: 234px;"></i>
    </div>
    <div class="image-lists">
      <div class="equip-images" :style="{transform : 'translateX('+activeTransform+'px) scale(1)'}">
        <div v-for="(item,index) in superUrl" :key="index" @click="imageItem(item,index)">
          <img :src="item.img" class="image-scroll" :class="index===activeIndex ? 'active-images' : ''"/>
        </div>
      </div>
    </div>
    <div class="switch-icon" style="right: 0;" @click="moveRight">
      <i class="el-icon-arrow-right" style="line-height: 234px;"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "carouselMap",
    props: {
      superUrl: {
        type: Array,
        default: function () {
          return [
            {
              url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            },
            {
              url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
              img: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            },
            {
              url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
              img: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            },
            {
              url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
              img: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            },
            {
              img: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            },
            {
              img: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            },
            {
              img: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            },
            {
              img: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            },
            {
              img: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            },
            {
              img: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            },
            {
              img: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
            },
          ]
        }
      }
    },
    data() {
      return {
        activeIndex: 0,
        activeTransform: 0,
      }
    },
    methods: {
      //左移动
      moveLeft() {
        this.activeIndex = this.activeIndex === 0 ? this.superUrl.length - 1 : this.activeIndex - 1;
        this.getActiveTransform(this.activeIndex);
      },
      imageItem(item, index) {
        this.activeIndex = index;
      },
      //右移动
      moveRight() {
        this.activeIndex = this.activeIndex === this.superUrl.length - 1 ? 0 : this.activeIndex + 1;
        this.getActiveTransform(this.activeIndex);
      },
      //左右移动
      getActiveTransform(index) {
        // console.log(index);
        this.activeTransform = index < 3 ? 0 : -(index - 2) * 427;
        // console.log(this.activeTransform)
      }
    },
  }
</script>

<style scoped>
  .carousel-map {
    display: flex;
    flex-flow: row nowrap;
    margin: 10px 0;
    position: relative;
  }

  .switch-icon {
    width: 40px;
    height: 234px;
    text-align: center;
    border: 1px solid #DCDFE6;
    cursor: pointer;
    position: absolute;
  }

  .image-lists {
    overflow: hidden;
    margin: 0 45px;
    /*position: relative;*/
  }

  .equip-images {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding: 0;
    margin: 0;
  }

  .image-scroll {
    width: 417px;
    height: 234px;
    margin: 0 5px;
  }

  .active-images {
    border: 2px solid #1890ff;
    /*position: absolute;*/
    /*left: 427px;*/
  }

</style>
