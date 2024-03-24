# Stored Procedures

Stored Procedures คือกลุ่มคำสั่ง SQL ที่ได้รับการคอมไพล์และเก็บไว้ในฐานข้อมูลเชิงสัมพันธ์ ซึ่งสามารถเรียกใช้เป็นรูปแบบการดำเนินการที่กำหนดไว้ล่วงหน้าได้ โดยมีจุดมุ่งหมายเพื่อเพิ่มประสิทธิภาพ และเพื่อการจัดการฐานข้อมูลที่มีประสิทธิผล

### ประโยชน์ของ Stored Procedures:
1. **ประสิทธิภาพ**: Stored Procedures ถูกคอมไพล์และเก็บไว้ในฐานข้อมูลเมื่อสร้างครั้งแรก ดังนั้นเมื่อเรียกใช้มันไม่จำเป็นต้องคอมไพล์ใหม่ ทำให้การเรียกใช้เร็วขึ้น
2. **ลดการใช้ทรัพยากรบนเครือข่าย**: การส่งคำสั่ง SQL ที่มีขนาดใหญ่ผ่านเครือข่ายอาจใช้ทรัพยากรมาก แต่การเรียกใช้ stored procedure เพียงแค่ส่งชื่อและพารามิเตอร์ ทำให้ใช้ทรัพยากรน้อยกว่า
3. **ซ่อนรายละเอียดการดำเนินการ**: ผู้ใช้หรือแอปพลิเคชันสามารถเรียกใช้ stored procedures โดยไม่จำเป็นต้องรู้รายละเอียดของโค้ด SQL ภายใน ช่วยให้สามารถเปลี่ยนแปลงโค้ดภายในโดยไม่กระทบกับผู้ใช้
4. **เสริมความปลอดภัย**: สามารถจำกัดการเข้าถึงข้อมูลให้กับผู้ใช้ผ่าน stored procedures โดยไม่อนุญาตให้พวกเขาเรียกใช้คำสั่ง SQL โดยตรง
5. **การใช้งานที่เป็นระเบียบ**: สามารถใช้ stored procedures เพื่อบังคับใช้กฎ หรือเงื่อนไขเฉพาะในการเข้าถึงหรืออัปเดตข้อมูล

### การใช้งาน:
Stored procedures สามารถรับพารามิเตอร์เข้ามา และอาจจะมีการส่งค่ากลับออกไป ซึ่งช่วยให้สามารถใช้งานได้ยืดหยุ่นมากขึ้น ผู้ใช้หรือแอปพลิเคชันสามารถเรียกใช้ stored procedures ผ่านคำสั่ง SQL ที่ง่าย เช่น `CALL` หรือ `EXECUTE` ตามด้วยชื่อของ stored procedure 

## ศึกษารายละเอียดเพิ่มเติมได้ที่:

### ภาษาไทย
- [บทสรุปฐานข้อมูล](https://www.saladpuk.com/beginner-1/database-design)
- [สอนพื้นฐาน SQL ทั้งหมดแบบจบในคลิปเดียว !! 🔥](https://www.youtube.com/watch?v=vd1qdnCX5RU)
- [ปูพื้นฐาน SQL สำหรับจัดการฐานข้อมูล 6 ชั่วโมงเต็ม [FULL COURSE]](https://www.youtube.com/watch?v=sgQiJ-8Ra8c)
- [สอน Microsoft SQL Server](https://www.youtube.com/watch?v=kh3MfhTiyQk&list=PLoTScYm9O0GH8gYuxpp-jqu5Blc7KbQVn&index=1)


### English
- [Stored Procedure Tutorial](https://www.w3schools.com/sql/sql_stored_procedures.asp)
- [Stored Procedure in SQL: Benefits And How to Create It](https://www.simplilearn.com/tutorials/sql-tutorial/stored-procedure-in-sql)
- [SQL Server stored procedures for beginners](https://www.sqlshack.com/sql-server-stored-procedures-for-beginners/)
