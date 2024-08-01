import { defineStore } from "pinia";

export const useCount = defineStore(
  "count",
  () => {
    const number = ref(0);
    const double = computed(() => number.value * 2);
    const increase = () => {
      number.value++;
    };
    return { number, double, increase };
  },
  {
    // pinia数据持久化默认存储为cookie
    persist: true,
  }
);
