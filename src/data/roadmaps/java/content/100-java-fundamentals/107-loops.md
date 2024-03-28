# วนลูป

ในภาษา Java และภาษาโปรแกรมอื่น การวนลูปจะถูกใช้เพื่อทำซ้ำส่วนหนึ่งของโปรแกรม มีด้วยกัน 4 รูปแบบได้แก่ for loop, forEach loop, while loop, doWhile loop

- Syntax ของ for loop คือ `for(ค่าเริ่ม; เงื่อนไขออกลูป; เพิ่มขึ้นทีละ){}`
```java
for (int i = 0; i < 5; i++) {
    System.out.println("Value of i: " + i);
}
// loop ทำซ้ำ 5 รอบ โดยแสดงค่า i จาก 0 ถึง 4
```

- Syntax ของ forEach loop คือ `for(ประเภทตัวแปร ตัวแปร:อาเรย์){}`
```java
int[] numbers = {3, 6, 9, 12};
for (int num : numbers) {
    System.out.println("Number: " + num);
}
// loop วนรอบผ่านอาร์เรย์ numbers และแสดงค่าในแต่ละตำแหน่ง
```

- Syntax ของ while loop คือ `while(condition){}`
```java
int count = 0;
while (count < 3) {
    System.out.println("Counting: " + count);
    count++;
}
// loop ทำซ้ำตราบที่ count น้อยกว่า 3 และแสดงค่า count
```

- Syntax ของ doWhile loop คือ `do{}while(condition);`
```java
int value = 5;
do {
    System.out.println("Value is: " + value);
    value++;
} while (value < 10);
// loop ทำซ้ำแสดงค่า value ตั้งแต่ 5 จนถึง 9 โดยจะทำอย่างน้อย 1 รอบแน่นอนก่อนตรวจสอบเงื่อนไข
```

สามารถเยี่ยมชมข้อมูลเพิ่มเติม : 

- [วนซ้ำใน java](https://www.matterdevs.com/java-programming-lang-series-loop/)
- [What are loops in Java?](https://www.javatpoint.com/java-for-loop)
- [Loops in Java.](https://www.programiz.com/java-programming/for-loop)
