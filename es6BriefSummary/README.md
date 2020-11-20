# es6BriefSummary  ES6简单总结
 ## List
  |-1、变量
    |-var    重复声明、函数级
    |-let    不能重复声明、块级、当做变量
    |-const  不能重复声明、块级、当做常亮
  |-2、函数
    |-简写
      i.只有一个参数，()可省略
      ii.只有一个return，{}可省略
    |-参数收集、扩展   ...args   **Rest Parameter 必须是最后一个
    |-默认参数  传值时，默认值；不传值，默认默认值
  |-3、数组
    |-map      映射
    |-reduce   汇总  一堆-->一个
    |-filter   过滤  一堆-->符合条件的
    |-forEach  循环（迭代）
  |-4、字符串
    |-startsWith、endsWith
    |-字符串模板``  可以直接把变量往里面塞
  |-5、面向对象
    |-类
      class Test{
        constructor(){
            
        }
        way1(){}
        way2(){}
        way3(){}
      }
    |-继承
      class cla2 extends cla1{
        constructor(){
          super();
        }
      }
  |-6、Promise
    |-封装异步操作   Promise.all([$.ajax({url:"xxx",dataType:"json"})])
  |-7、generator
    |-function *show(){
        yield
      }
  |-8、async、await
  |-9、JSON
    |-JSON.stringify({a:12,b:3})  -->{"a":12,"b":3}
    |-JSON.parse({"a":12,"b":3})  -->{a:12,b:3}
  |-10、解构赋值
    |-左右结构一致，右边合法，声明、赋值一次完成  
  |-11、模块化
 ## Lists dretails
    |-compatibility  兼容性
      |-编译、转换
      |-1、在线转换
      |-2、提前编译
    |-variable       变量
    |-function       函数   
      |- 函数的参数
      |-arrowFunction 箭头函数      
    |-deconstruction   解构赋值 
    |-array   数组
      |-map     映射  一个对一个
      |-reduce  汇总  一堆出来一个
      |-filter  过滤器
      |-forEach 循环（迭代）
    |-string   字符串
    |-oop      面向对象
    |-json