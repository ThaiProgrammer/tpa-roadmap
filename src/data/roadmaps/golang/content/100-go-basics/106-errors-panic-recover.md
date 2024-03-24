# Errors/Panic/Recover

แทนที่จะเพิ่มตัวจัดการกรณีพบ error ผู้สร้าง Go ได้ใช้ประโยชน์จากความสามารถของ Go ในการส่งคืนค่าหลายค่า โดยวิธีการทั่วไปที่ใช้ใน Go สำหรับการจัดการข้อผิดพลาดคือการส่ง return error เป็นค่าสุดท้ายในคำสั่ง return ของฟังก์ชันแทน

Panic มักหมายถึง มีบางอย่างผิดพลาดไปอย่างไม่คาดคิด มักใช้เพื่อหยุดการทำงานของโปรแกรมอย่างรวดเร็ว กรณีที่เกิด error ที่ไม่ควรเกิดขึ้นระหว่างการทำงานปกติ หรือ error ที่เราไม่สามารถจัดการได้อย่างราบรื่น

การจัดการภาวะฉุกเฉิน (panic recovery) ในภาษา Go อาศัยฟีเจอร์ที่เรียกว่า deferred function ฟังก์ชันเหล่านี้รับประกันว่าจะทำงานทันทีที่ฟังก์ชันแม่ (parent function) return ออกมาไม่ว่าเหตุผลที่ฟังก์ชันแม่จะ return เป็นอะไรก็ตาม เช่น คำสั่ง return จบบล็อกของฟังก์ชัน หรือเกิด panic

ดูแหล่งข้อมูลต่อไปนี้เพื่อเรียนรู้เพิ่มเติม:

- [Error handling and Go](https://go.dev/blog/error-handling-and-go)
- [Go Defer, Panic and Recover](https://go.dev/blog/defer-panic-and-recover)
- [Effective error handling in Go](https://earthly.dev/blog/golang-errors/)
