import"./assets/modulepreload-polyfill-3cfb730f.js";const r="feedback-form-state",l=document.querySelector(".feedback-form");l.addEventListener("submit",s);let e=JSON.parse(localStorage.getItem(r))||{};const{email:t,message:a}=l.elements;m();function m(){e&&(t.value=e.email||"",a.value=e.message||"")}function s(o){o.preventDefault(),console.log({email:t.value,message:a.value}),!(t.value===""||a.value==="")&&(localStorage.removeItem(r),o.currentTarget.reset(),e={})}
//# sourceMappingURL=commonHelpers2.js.map