# Constraints

Database constraints หรือข้อจำกัดในฐานข้อมูล เป็นกฎที่ใช้ในการกำหนดข้อจำกัดสำหรับประเภทของข้อมูลที่สามารถเก็บไว้ในตาราง ซึ่งช่วยให้รักษาความถูกต้อง (integrity) และความสอดคล้อง (consistency) ของข้อมูลในฐานข้อมูล มีหลายประเภทของ constraints ในฐานข้อมูล:

1. **PRIMARY KEY Constraint**: กำหนดให้คอลัมน์หนึ่งหรือหลายคอลัมน์เป็นคีย์หลักของตาราง ค่าในคอลัมน์นี้ต้องเป็นค่าที่ไม่ซ้ำกันและไม่เป็น null ตัวอย่างเช่น, ในตารางของพนักงาน, `employee_id` อาจเป็น PRIMARY KEY.

2. **FOREIGN KEY Constraint**: สร้างความสัมพันธ์ระหว่างตารางโดยอ้างอิง PRIMARY KEY ของตารางอื่น ช่วยให้แน่ใจว่าค่าในคอลัมน์นี้ต้องมีอยู่ในตารางที่อ้างอิง ตัวอย่างเช่น, `department_id` ในตารางพนักงานอาจเป็น FOREIGN KEY ที่อ้างอิงไปยังตารางแผนก.

3. **UNIQUE Constraint**: กำหนดให้ข้อมูลในคอลัมน์หนึ่งหรือหลายคอลัมน์ต้องเป็นค่าที่ไม่ซ้ำกัน ตัวอย่างเช่น, `email_address` ในตารางของพนักงานอาจมี UNIQUE constraint เพื่อให้แน่ใจว่าไม่มีอีเมลที่ซ้ำกัน.

4. **CHECK Constraint**: กำหนดเงื่อนไขสำหรับค่าที่สามารถเก็บไว้ในคอลัมน์ ตัวอย่างเช่น, สามารถใช้ CHECK constraint เพื่อแน่ใจว่าอายุของพนักงานต้องมากกว่า 18.

5. **NOT NULL Constraint**: ระบุว่าคอลัมน์ไม่สามารถมีค่า null ได้ ตัวอย่างเช่น, ในตารางของพนักงาน, `first_name` อาจมี NOT NULL constraint เพื่อบังคับว่าต้องระบุชื่อ.

ข้อจำกัดเหล่านี้ช่วยให้ผู้ออกแบบฐานข้อมูลสามารถระบุกฎเกณฑ์และข้อกำหนดที่ชัดเจนสำหรับข้อมูลที่เก็บในฐานข้อมูล ทำให้ข้อมูลนั้นมีความน่าเชื่อถือและถูกต้องมากขึ้น.

## ศึกษารายละเอียดเพิ่มเติมได้ที่:

### ภาษาไทย
- [บทสรุปฐานข้อมูล](https://www.saladpuk.com/beginner-1/database-design)
- [สอนพื้นฐาน SQL ทั้งหมดแบบจบในคลิปเดียว !! 🔥](https://www.youtube.com/watch?v=vd1qdnCX5RU)
- [ปูพื้นฐาน SQL สำหรับจัดการฐานข้อมูล 6 ชั่วโมงเต็ม [FULL COURSE]](https://www.youtube.com/watch?v=sgQiJ-8Ra8c)
- [สอน Microsoft SQL Server](https://www.youtube.com/watch?v=kh3MfhTiyQk&list=PLoTScYm9O0GH8gYuxpp-jqu5Blc7KbQVn&index=1)


### English
- [SQL Constraints](https://www.w3schools.com/sql/sql_constraints.asp)
- [Constraints of SQL](https://www.educative.io/courses/database-design-fundamentals/m7JnY9Xm6Qp)
- [Constraints in DBMS](https://beginnersbook.com/2015/04/constraints-in-dbms/)
