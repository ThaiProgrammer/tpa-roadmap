# ไฟล์ และ API

เรียนรู้วิธีการทำงานกับไฟล์ เช่น การอ่าน การเขียน และการลบไฟล์และโฟลเดอร์ต่างๆ และเรียนรู้วิธีการเรียก API, จัดการข้อมูลที่ได้รับกลับมา และอื่นๆ

- FileWriter - คลาสนี้ใช้เพื่อสร้างไฟล์ หรือเขียนข้อความลงในไฟล์
```java
FileWriter writer = new FileWriter("data.txt"); // เลือกไฟล์เป้าหมาย
writer.write("Hello World!"); // เขียนคำว่า Hello World! ลงในไฟล์
writer.close(); // จำเป็นต้องปิดทุกครั้ง
```

- FileReader - คลาสนี้ใช้เพื่ออ่านไฟล์
```java
FileReader reader = new FileReader("data.txt"); // เลือกไฟล์เป้าหมาย
int value; // กำหนดตัวแปรที่จะใช้
while ((value = reader.read()) != -1) { // อ่านทุกตัวอักษรไปเรื่อยๆ จนกว่าจะหมด
    System.out.print((char)value); // แปลงค่าที่ได้รับจากการอ่านเป็น char ก่อนถึงแสดงผลได้
}
reader.close(); // จำเป็นต้องปิดทุกครั้ง
```

สามารถเยี่ยมชมข้อมูลเพิ่มเติม : 

- [File Writer (เขียนไฟล์)](https://www.w3big.com/th/java/java-filewriter.html#gsc.tab=0)
- [File Reader (อ่านไฟล์)](https://www.w3big.com/th/java/java-filereader.html#gsc.tab=0)
- [อะไรคือ Java I/O Stream](https://medium.com/nextzy/basicjavaiostream-2c45277618ba)
- [How To Work With Files In Java](https://www.marcobehler.com/guides/java-files)
- [Java File Class](https://www.javatpoint.com/java-file-class)
- [Java.io.File Class in Java](https://www.geeksforgeeks.org/file-class-in-java/)
- [Java HttpURLConnection Example - Java HTTP Request GET, POST](https://www.digitalocean.com/community/tutorials/java-httpurlconnection-example-java-http-request-get-post)
- [5 ways to make HTTP requests in Java](https://www.twilio.com/blog/5-ways-to-make-http-requests-in-java)
