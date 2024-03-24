# Triggers

Database Triggers หรือทริกเกอร์ในฐานข้อมูล เป็นโปรแกรมหรือรหัสที่ถูกกำหนดให้ทำงานอัตโนมัติเมื่อเกิดเหตุการณ์ที่กำหนดไว้ในฐานข้อมูล เช่น การเพิ่ม (INSERT), การอัปเดต (UPDATE), หรือการลบ (DELETE) ข้อมูลในตารางหนึ่งหรือหลายตาราง ทริกเกอร์ช่วยให้สามารถอัตโนมัติการดำเนินการที่ซับซ้อน รักษาความสอดคล้องของข้อมูล และบังคับใช้กฎการจัดการฐานข้อมูลโดยอัตโนมัติ

### การทำงานของ Database Triggers:

- **BEFORE Trigger**: ทำงานก่อนการดำเนินการ (INSERT, UPDATE, DELETE) บนตาราง เหมาะสำหรับการตรวจสอบหรือเปลี่ยนแปลงข้อมูลก่อนที่ข้อมูลจะถูกเปลี่ยนแปลงในฐานข้อมูล
- **AFTER Trigger**: ทำงานหลังจากการดำเนินการบนตาราง เหมาะสำหรับการดำเนินการที่ต้องการข้อมูลที่ได้รับการอัปเดตแล้ว
- **INSTEAD OF Trigger**: ทำงานแทนการดำเนินการที่กำหนด เหมาะสำหรับการดำเนินการที่ซับซ้อนที่ต้องการควบคุมเหตุการณ์การเข้าถึงข้อมูลอย่างละเอียด

### ตัวอย่างของ Database Trigger:

สมมติว่ามีตาราง `employees` และตาราง `audit_log` ซึ่งใช้เก็บประวัติการอัปเดตข้อมูลของพนักงาน สามารถสร้าง AFTER UPDATE Trigger เพื่อบันทึกการเปลี่ยนแปลงใด ๆ ที่เกิดขึ้นกับตาราง `employees` ไปยังตาราง `audit_log`

```sql
CREATE TRIGGER record_employee_update
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
  INSERT INTO audit_log (employee_id, update_time)
  VALUES (NEW.id, NOW());
END;
```

ในตัวอย่างนี้, ทุกครั้งที่มีการอัปเดตข้อมูลในตาราง `employees`, Trigger `record_employee_update` จะทำงาน โดยจะเพิ่มบันทึกใหม่ในตาราง `audit_log` ที่บันทึก `employee_id` และเวลาที่มีการอัปเดต

ทริกเกอร์เหล่านี้มีความสามารถที่มีประโยชน์มากในการรักษาความสอดคล้องของข้อมูลและอัตโนมัติกระบวนการที่ซับซ้อนในฐานข้อมูล แต่ควรใช้ด้ว

## ศึกษารายละเอียดเพิ่มเติมได้ที่:

### ภาษาไทย
- [บทสรุปฐานข้อมูล](https://www.saladpuk.com/beginner-1/database-design)
- [สอนพื้นฐาน SQL ทั้งหมดแบบจบในคลิปเดียว !! 🔥](https://www.youtube.com/watch?v=vd1qdnCX5RU)
- [ปูพื้นฐาน SQL สำหรับจัดการฐานข้อมูล 6 ชั่วโมงเต็ม [FULL COURSE]](https://www.youtube.com/watch?v=sgQiJ-8Ra8c)
- [สอน Microsoft SQL Server](https://www.youtube.com/watch?v=kh3MfhTiyQk&list=PLoTScYm9O0GH8gYuxpp-jqu5Blc7KbQVn&index=1)


### English
- [Database Triggers](https://docs.oracle.com/cd/A57673_01/DOC/server/doc/SCN73/ch15.htm)
- [Database Triggers: Examples & Overview](https://study.com/academy/lesson/database-triggers-examples-overview.html)
- [What are Triggers in SQL?](https://www.edureka.co/blog/triggers-in-sql/)
- [What is a SQL Trigger?](https://www.essentialsql.com/sql-trigger/)
