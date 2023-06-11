// 1. 函数式组件
// export default () => <div>3333333333</div>;
import { defineComponent, ref, withModifiers } from "vue";
// 2. defineComponent 返回一个render函数
// export default defineComponent({
//   render() {
//     return <div class="underline">test</div>;
//   },
// });

// 3.defineComponent setup()
// 摒弃this
// 借助bable-plugin-jsx
// vue独特概念， 修饰符， slot ， directive，emit

export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  emits: ["clickMe"],
  setup(props, { slots, emit }) {
    const count = ref(0);
    const inc = () => {
      count.value++;
      emit("clickMe");
    };
    const list = ref<string[]>(["a", "b", "c"]);
    return () => {
      const span = false ? <span>A</span> : <span>B</span>;

      return (
        <div onClick={withModifiers(inc, ["self"])}>
          test: {count.value}
          <input v-focus type="text" v-model={count.value} />
          <div>{span}</div>
          <ul>
            {list.value.map(str => (
              <li key={str}>{str}</li>
            ))}
          </ul>
          {/* // 插槽 */}
          <div>{slots.default ? slots.default() : "default content"}</div>
          <div>{slots.title ? slots.title() : "title content"}</div>
          <div>{slots.default ? slots.default() : "default content"}</div>
          {/* <Test
            v-slot={{
              title: () => <h3>tttt</h3>,
            }}
          ></Test> */}
        </div>
      );
    };
  },
});
