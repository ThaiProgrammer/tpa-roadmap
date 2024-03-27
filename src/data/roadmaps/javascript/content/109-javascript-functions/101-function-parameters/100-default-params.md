# Default Parameters


รูปแบบการเขียนที่กำหนดค่าเริ่มต้นให้กับฟังก์ชันพารามิเตอร์ (default parameter) ทำให้เราสามารถกำหนดค่าตั้งต้นให้กับตัวแปรที่เป็นพารามิเตอร์ของฟังก์ชันได้ ถ้าหากผู้เรียกใช้งานฟังก์ไม่ได้กำหนดค่าให้ หรือส่งค่า `undefined` เข้ามาในฟังก์ชัน

```js
function sayHi(name = "Guest") {
	console.log("Hello ", name)
}

sayHi() // Hello Guest
sayHi(undefined) // Hello Guest

sayHi("John") // Hello John
```


เยี่ยมชมแหล่งข้อมูลต่อไปนี้เพื่อเรียนรู้เพิ่มเติม:

- [Parameters เริ่มต้น  - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
