# เงื่อนไข

Java มีคำสั่งที่จะควบคุมเงื่อนไขได้ดังนี้:

- ใช้ `if` เพื่อระบุบล็อกของโค้ดที่จะถูกรัน ถ้าเงื่อนไขเป็นจริง โดยถ้าไม่เป็นจริงก็จะไม่รันบล็อกนั้น
- ใช้ `else` คู่กับ `if` เพื่อระบุบล็อกของโค้ดที่จะถูกรัน ถ้าเงื่อนไขเดียวกันเป็นเท็จ 
- ใช้ `else if` คู่กับ `if` เพื่อระบุเงื่อนไขต่อไป ถ้าเงื่อนไขแรกเป็นเท็จ
- ใช้ `switch` เพื่อระบุบล็อกของโค้ดทางเลือกหลายๆบล็อก ที่จะถูกรันถ้าสักเงื่อนไขเป็นจริง
- ใช้ `?,:` เพื่อระบุเงื่อนไขบรรทัดเดียว (แบบย่อ)

```java
        // เช็คเงื่อนไขว่า number มากกว่า 0 หรือไม่ ด้วย if else
        int number = 10;

        if (number > 0) {
            System.out.println("เลข " + number + " เป็นบวก");
            // ผลลัพธ์ : เลข 10 เป็นบวก
        } else {
            System.out.println("เลข " + number + " เป็นลบหรือเท่ากับศูนย์");
        }

        // ตรวจสอบค่าของตัวแปร day ด้วย switch
        int day = 3;
        String dayString;

        switch (day) {
            case 1:
                dayString = "วันจันทร์";
                break;
            case 2:
                dayString = "วันอังคาร";
                break;
            case 3:
                dayString = "วันพุธ";
                break;
            default:
                dayString = "ไม่มีวันที่ตรงกับที่ระบุ";
                break;
        }
        System.out.println("วันที่ " + day + " คือ " + dayString);
        // ผลลัพธ์ : วันที่ 3 คือ วันพุธ
```

สามารถเยี่ยมชมข้อมูลเพิ่มเติม : 


- [คำสั่งเช็คเงื่อนไข if else, switch](https://www.matterdevs.com/java-programming-lang-series-conditional/)
- [คำสั่งเลือกเงื่อนไข if-else, switch](https://marcuscode.com/lang/java/selection-statements#google_vignette)
- [What are Conditional statements?](https://www.educative.io/answers/what-are-conditional-statements-in-programming)
- [Conditionals in Java](https://www.javatpoint.com/java-if-else)
- [Conditionals and Loops in Java](https://youtu.be/ldYLYRNaucM)
- [Switch Statements + Nested Case in Java](https://youtu.be/mA23x39DjbI)
