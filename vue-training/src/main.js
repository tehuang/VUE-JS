//載入createApp函式
import { createApp } from "vue";
//載入根組件
import App from "./App.vue";
//建立 Vue App 物件
const app = createApp(App);
//掛載到 HTML標籤底下
app.mount("#app");