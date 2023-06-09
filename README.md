# k-ui

## 组件化知识

### 组件命名

官方建议使用大驼峰命名

### 属性定义

使用更详细的方式

### 事件定义

事件名称会被自动转换，通常使用驼峰做事件名， 监听变成肉串方式

```
<button @click="$emit("someEvent")"></button>

<MyComponent  @some-evnet="xx"/>
```

### 透传属性

```
<MyComponent class="button"/>

// 透传下来
<button class="button">按钮</button>

```

使用下面方法禁止

```
export defualt{
    inheritAttrs: false
}
```

访问透传特性

```
setup

import {useAttrs} from 'vue'
const attrs = useAttrs()
```

### 插槽

父传子

```
import {useSlots} from 'vue'
const slots = useSlots()
const defaultContent = slots.default()
```

### provide/inject

```
import {provide} from 'vue'

provideP(k, v)
```

### composables

Composable Api 可重用逻辑， 类似于 react 的 hooks

使用 use 开头

### 组件通信

props

### store

### parent/root

```
this.$parent.$on('foo', handle)
this.$parent.$emit('emit')
```

### $children

被移除

### $ref

### $attrs

包含没有声明的组件特性

```

```

## vue3 中组件相关 api 的用法

### 定义组件

```
// vue2
// Vue.component()

// vue3app.createApp({}).component('comp', {template: ···})
```

### 移除.sync

## 创建项目

```
yarn create vite
```

添加 tsx

```
yarn add @vitejs/plugin-vue-jsx
```

配置 vite.config.ts

```
import vueJsx from '@vitejs/plugin-vue-jsx'
```

## 配置 eslint

```
npx eslint --init
```

### 配置 prettier

```
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```

### 配置 lint-staged

```
npx mrm@2 lint-staged
```

## 文档系统

```
yarn add -D vitepress
```

```
mkdir docs && echo '# hello vitePress' > docs/index.md
```

配置看文件， 注意要安装

```
yarn add -D vitepress-theme-demoblock
```

## 搭建样式体系

```
yarn add -D sass tailwindcss postcss autoprefixer
```

初始化 tailwindcss

```
npx tailwindcss init -p
```

### 解决样式报错问题

在 vscode 的 setting 中关闭检测

```
yarn add -D stylelint stylelint-config-standard
```
