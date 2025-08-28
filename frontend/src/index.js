import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
 <App />
 </React.StrictMode>,
);

// إلغاء تسجيل أي Service Worker قديم ومسح الكاش لضمان تحديثات فورية أثناء المعاينة
if ('serviceWorker' in navigator) {
 window.addEventListener('load', () => {
 // إلغاء أي SW سابق
 navigator.serviceWorker.getRegistrations().then((regs) => {
 regs.forEach((reg) => reg.unregister());
 });
 // مسح جميع مخابئ الكاش
 if (window.caches && caches.keys) {
 caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
 }
 });
}

