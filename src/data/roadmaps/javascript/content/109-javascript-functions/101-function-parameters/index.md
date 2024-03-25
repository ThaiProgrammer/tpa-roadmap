# Function Parameters

พารามิเตอร์ คือ ชื่อตัวแปรที่ถูกกำหนดไว้ตอนประกาศนิยามของฟังก์ชัน ตัวอย่างเช่น

```js
// มีตัวแปร num เป็นฟังก์ชันพารามิเตอร์ (ฟังก์ชันนี้มี 1 พารามิเตอร์)
function areaOfSquare(num) {
	return num ** 2
}
```

```js
// มีตัวแปร width และ height เป็นฟังก์ชันพารามิเตอร์ (ฟังก์ชันนี้มี 2 พารามิเตอร์)
function areaOfRectangle(width, height) {
	return width * height
}
```
ค่าของพารามิเตอร์จะถูกกำหนดตอนเรียกใช้งานฟังก์ชัน (call function) เช่น 

```js
function areaOfSquare(num) {
	return num ** 2
}

areaOfSquare(2) // ค่า num = 2
areaOfSquare(4) // ค่า num = 4
```

นอกจากนี้มีไวยกรณ์การเขียนพารามิเตอร์ในรูปแบบพิเศษอยู่ 2 แบบคือ  
- รูปแบบการเขียนที่กำหนดค่าเริ่มต้นให้กับพารามิเตอร์ (เรียกว่า default parameter) และ 
- รูปแบบการเขียนรับฟังก์ชันพารามิเตอร์แบบไม่จำกัดจำนวน (เรียกว่า rest parameter)

เยี่ยมชมแหล่งข้อมูลต่อไปนี้เพื่อเรียนรู้เพิ่มเติม:

- [Function Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters)
