# Containers คืออะไร

Containers มีน้ำหนักเบา พกพาได้ง่าย และแยกออกจากสภาพแวดล้อมของ software ที่จะช่วยให้นักพัฒนารันและจัดแพ็คเกจแอปพลิเคชันกับ dependencies อย่างสม่ำเสมอในแพลตฟอร์มที่แตกต่างกัน ช่วยปรับปรุงพัฒนาแอปพลิเคชัน การติดตั้ง และจัดการโปรเซสต่าง ๆ ขณะที่รับรองการรันแอปพลิเคชันได้อย่างต่อเนื่องโดยไม่คำนึงถึงโครงสร้างพื้นฐานของระบบนั้น ๆ

## containers ทำงานอย่างไร

แตกต่างจากการใช้ virtualization แบบดั้งเดิมซึ่งจะจำลองระบบปฏิบัติการออกมาทั้งชุดด้วยทรัพยากร hardware ที่มีอยู่ ส่วน containers จะแบ่งปัน OS kernel ของ host และใช้ประโยชน์จากเทคนิค virtualization เพื่อที่จะสร้างโปรเซสแยกออกมาเดี่ยว ๆ แนวทางนี้นำไปสู่คุณประโยชน์หลายประการ รวมไปถึง:

- **ประสิทธิภาพ**: Containers มี overhead ที่น้อยกว่าและสามารถแชร์ libraries ทั่วไปกับ executable files ได้ ทำให้สามารถที่จะรัน containers ได้มากขึ้นใน host เพียงตัวเดียวเมื่อเทียบกับ virtual machines (VMs).
- **พกพาสะดวก**: Containers ทำ encapsulate แอปพลิเคชันและ dependencies เพื่อที่จะสามารถเคลื่อนย้ายได้ง่ายและใช้งานบน environments ของแพลตฟอร์มที่แตกต่างกันได้อย่างต่อเนื่อง
- **เริ่มต้นอย่างรวดเร็ว**: เนื่องจาก containers ไม่จำเป็นต้อง boot ตัว OS ทั้งชุด มันสามารถเปิดและปิดได้เร็วกว่า VMs มาก
- **ความต่อเนื่อง**: Containers จัดให้มีสภาพแวดล้อมที่สม่ำเสมอสำหรับการพัฒนา การทดสอบ และการใช้งานจริงในขั้นตอนของแอปพลิเคชัน ช่วยลดปัญหา "มันใช้งานบนเครื่องฉันได้อยู่นะ"

## Containers และ Docker

Docker คือแพลตฟอร์มที่ลดความซับซ้อนในกระบวนการสร้าง การติดตั้ง และจัดการ containers ต่าง ๆ มีบริการนักพัฒนาและผู้ดูแลระบบด้วยชุดเครื่องมือและ APIs เพื่อจัดการกับแอปพลิเคชันที่ถูก containerized ด้วย Docker คุณสามารถสร้างและแพ็คเกจโค้ดของแอปพลิเคชัน libraries และ dependencies เข้าไปใน container image ซึ่งสามารถนำไปแจกจ่ายและรันได้อย่างต่อเนื่องในสภาพแวดล้อมใด ๆ ก็ตามที่รองรับ Docker

- [Containers คืออะไร](https://www.docker.com/resources/what-container/)