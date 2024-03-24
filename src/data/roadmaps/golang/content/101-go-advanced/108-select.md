# Select

คำสั่ง `selec`t ใน Go คือการให้กลุ่มของ Goroutine รอการดำเนินการจากการสื่อสารหลายอย่างพร้อมกัน

`select` จะบล็อกไว้จนกว่าหนึ่งใน case ของมันจะสามารถทำงานได้ จากนั้นจะทำการดำเนินการ case นั้นๆ โดยการเลือกหนึ่งอย่างที่พร้อมสุ่มได้ถ้ามีหลายอย่างพร้อมที่จะทำงาน คำสั่ง `select` เหมือนกับคำสั่ง switch แต่ในคำสั่ง select case จะอ้างอิงถึงการสื่อสาร เช่น การส่งหรือการรับข้อมูลผ่านทางช่องสื่อสาร (channel)

ดูแหล่งข้อมูลต่อไปนี้เพื่อเรียนรู้เพิ่มเติม:

- [Select](https://go.dev/tour/concurrency/5)
- [Go by Example: Select](https://gobyexample.com/select)
- [Select in Golang](https://www.geeksforgeeks.org/select-statement-in-go-language/)
- [Select Statement](https://www.youtube.com/watch?v=1c7ttSJDMAI)
