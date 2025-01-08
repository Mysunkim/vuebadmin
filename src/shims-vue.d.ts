/* eslint-disable */
//Vue 파일(.vue)을 TypeScript에서 인식할 수 있도록 하기 위한 선언 파일
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
