# Rest Parameters

 rest parameter คือ รูปแบบการเขียนรับฟังก์ชันพารามิเตอร์แบบไม่จำกัดจำนวน โดยข้อมูลที่ถูกส่งมาเมื่อเรียกใช้งานฟังก์ชันจะมีประเภทของข้อมูลเป็นอาเรย์ ทำให้เราสามารถเขียนสิ่งที่เรียกว่า [variadic functions](https://en.wikipedia.org/wiki/Variadic_function) ในภาษา Javasctipt ได้

 ```js
 function printPlace(...places) {
	for(let place of places) {
		console.log(place)
	}
 }
 printPlace("Bangkok")// Bangkok
 printPlace("Bangkok","London")// Bangkok London
 printPlace("Bangkok","London","Paris")// Bangkok London Paris
 ```

เยี่ยมชมแหล่งข้อมูลต่อไปนี้เพื่อเรียนรู้เพิ่มเติม:

- [Rest Parameters - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
