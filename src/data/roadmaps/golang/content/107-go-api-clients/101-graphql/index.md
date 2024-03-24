# Graphql

`GraphQL` เป็นภาษา query สำหรับ API ที่ให้ความสามารถในการสื่อสารกับเซิร์ฟเวอร์เพื่อดึงข้อมูลที่ต้องการได้อย่างแม่นยำและมีประสิทธิภาพ แตกต่างจาก REST API ที่ใช้การกำหนด endpoint สำหรับการดึงข้อมูลแต่ละประเภท, GraphQL ช่วยให้คุณสามารถส่งคำร้องขอเพื่อดึงข้อมูลที่ต้องการเฉพาะจากเซิร์ฟเวอร์ในครั้งเดียวได้

### หลักการทำงานของ GraphQL:

- **การส่งคำร้องขอ (Query):** คุณสามารถระบุข้อมูลที่ต้องการจาก API โดยใช้ query ใน GraphQL ซึ่งช่วยให้คุณสามารถระบุชนิดข้อมูลและฟิลด์ที่ต้องการได้อย่างชัดเจน
- **การอัปเดตข้อมูล (Mutation):** นอกจากการดึงข้อมูลแล้ว GraphQL ยังรองรับการอัปเดตข้อมูลผ่าน mutation ที่ช่วยให้คุณสามารถสร้าง อัปเดต หรือลบข้อมูลบนเซิร์ฟเวอร์ได้
- **การสมัครรับข้อมูล (Subscription):** ในบางกรณีที่ต้องการข้อมูลเรียลไทม์, GraphQL มีระบบ subscription ที่ช่วยให้ไคลเอนต์สามารถรับข้อมูลที่อัปเดตใหม่โดยอัตโนมัติเมื่อมีการเปลี่ยนแปลง

### ตัวอย่างการใช้งาน GraphQL:

สมมติว่าคุณมี API ที่จัดการข้อมูลของหนังสือ และคุณต้องการดึงชื่อหนังสือและผู้แต่ง ใน GraphQL คุณสามารถสร้าง query ได้ดังนี้:

```graphql
query {
  books {
    title
    author
  }
}
```

คำร้องขอนี้จะส่งกลับข้อมูลเฉพาะชื่อหนังสือและผู้แต่งจากเซิร์ฟเวอร์ ไม่รวมข้อมูลอื่นๆ ที่ไม่ต้องการ ซึ่งช่วยลดข้อมูลที่ไม่จำเป็นในการส่งผ่านเครือข่ายและเพิ่มประสิทธิภาพในการใช้งาน API นั่นเอง

การใช้งาน GraphQL ทำให้การพัฒนาแอปพลิเคชันมีความยืดหยุ่นและเป็นระเบียบมากขึ้น โดยเฉพาะในโปรเจกต์ขนาดใหญ่ที่มีข้อมูลมากมายที่

ดูแหล่งข้อมูลต่อไปนี้เพื่อเรียนรู้เพิ่มเติม:

- [GraphQL Website](https://graphql.org/)
- [Learn GraphQL](https://graphql.org/learn/)
- [GraphQL Tutorials](https://www.graphql.com/tutorials/)
- [Red Hat: What is GraphQL?](https://www.redhat.com/en/topics/api/what-is-graphql)
- [Digital Ocean: An Introduction to GraphQL](https://www.digitalocean.com/community/tutorials/an-introduction-to-graphql)
- [How to GraphQL: The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)
- [GraphQL Full Course - Novice to Expert (by freeCodeCamp.org on YouTube)](https://www.youtube.com/watch?v=ed8SzALpx1Q)
- [Beginner GraphQL Series (by Ben Awad on YouTube)](https://www.youtube.com/playlist?list=PLN3n1USn4xln0j_NN9k4j5hS1thsGibKi)
