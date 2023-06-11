## 测试类型

1. 单元测试
2. 组件测试
3. 端对端测试

## 测试框架

- jest
- vitest

## vitest

### 使用步骤

1

```
pnpm install -D vitest happy-dom @test-library/vue
```

2

配置 vite.config.ts/tsconfig.json

## 单元测试的原则

1. 单元测试应该写的很小，仅覆盖单独函数，类，复用逻辑等
2. 单测关注逻辑的正确性，且仅关注程序功能的一个小块
3. 对于可视部分， 组件验证基于输入的 props， slots 等渲染输出的结果
4. 对于行为， 组件测试验证响应用户输入事件正确渲染更新和派发事件
