# ฟังก์ชั่น

ในการเขียนโปรแกรม Java ฟังก์ชั่นคือบล็อคของโค้ดที่เขียนขึ้นเพื่อทำงานเฉพาะ และต้องการให้นำโค้ดบล็อคนี้กลับมาใช้ซ้ำได้ เราจะเขียนฟังก์ชั่นครั้งเดียวและนำกลับมาใช้งานหลายๆครั้ง ตามหลักการ [DRY](https://medium.com/@thehoistory/%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%88%E0%B8%B0%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D%E0%B8%82%E0%B8%AD%E0%B8%87-dry-dont-repeat-yourself-%E0%B8%81%E0%B9%87%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B9%81%E0%B8%AB%E0%B8%A5%E0%B8%B0-7c14aac17626) ย่อมาจาก "Don't Repeat Yourself" ความว่า โค้ดที่ทำงานเหมือนกัน ไม่จำเป็นต้องเขียนใหม่ทุกครั้ง ให้เขียนครั้งเดียวก็พอ

ขั้นตอน -

1. กำหนดชื่อฟังก์ชั่น - ชนิดข้อมูล ชื่อฟังก์ชั่น(พารามิเตอร์) {การทำงานด้านใน}
```java
// ต้องการ ค่าสองตัวเพื่อใช้ฟังก์ชั่นนี้คือ a และ b ที่เป็นตัวเลข
public static int addNumbers(int a, int b) { 

    int sum = a + b; // ประมวลผลบางอย่าง
    return sum; // ส่งค่าที่ประมวลผลแล้วออก
}
```

2. เรียกใช้ฟังก์ชั่น - ชื่อฟังก์ชั่น(พารามิเตอร์)
```java
public static void main(String[] args) {
    
    // เรียกใช้ฟังก์ชันด้วยการส่งค่า a และ b ที่กำหนดไว้ลงไป
    int result = addNumbers(5, 3);
    System.out.println("ผลรวมคือ: " + result); 
    // แสดงผล "ผลรวมคือ: 8"
}
```

สามารถเยี่ยมชมข้อมูลเพิ่มเติม : 

- [เมธอดใน Java](https://marcuscode.com/lang/java/methods)
- [Methods/Functions in Java.](https://www.javatpoint.com/method-in-java)
- [What are methods or functions in Java.](https://www.geeksforgeeks.org/methods-in-java/)
- [Learn Functions/Methods in Java](https://www.w3schools.com/java/java_methods.asp)
- [Functions / Methods in Java](https://www.youtube.com/watch?v=vvanI8NRlSI)
