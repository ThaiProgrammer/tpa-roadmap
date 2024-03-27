# IIFE

Immediately-Invoked Function Expression (IIFE) คือฟังก์ชันที่ถูกเรียกใช้ทันทีหลังจากถูกสร้างขึ้น ตัวอย่างเช่น

```js
(function () {
  console.log("Hello")
})();
```

หรือสามารถเขียนเป็นฟังก์ชันแบบลูกศร (Arrow Function) ได้ตามตัวอย่างด้านล่าง

```js
(() => {
  console.log("Hello")
})();
```

เยี่ยมชมแหล่งข้อมูลต่อไปนี้เพื่อเรียนรู้เพิ่มเติม:

- [IIFE — MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
- [JavaScript in Plain English - IIFE](https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)
