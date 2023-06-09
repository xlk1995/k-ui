import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonProps } from "./button-type";

export default defineComponent({
  name: "SButton",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    return () => {
      const { type, size, disabled, block } = toRefs(props);

      const defaultSlots = slots.default ? slots.default() : "按钮";
      const blockCls = block.value ? "s-btn--block" : "";
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`}
        >
          {defaultSlots}
        </button>
      );
    };
  },
});
