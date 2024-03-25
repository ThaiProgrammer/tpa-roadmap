# BTreeSet

`BTreeSet` in Rust is a data structure that implements a set backed by a BTree. Its functionality is similar to that of other set data structures in that it maintains a collection of unique elements and allows for operations like insertion, removal, and querying. But the elements in a `BTreeSet` are sorted according to an ordering relation, which may be customized by the user. The sorting enables efficient range queries as well as other operations such as finding the minimum or maximum element.


`BTreeSet` ใน Rust เป็นโครงสร้างข้อมูลที่มีลักษณะเป็นเซตที่สร้างตามหลักการของ BTree ฟังก์ชันการทำงานของมันคล้ายกับโครงสร้างข้อมูลเซตอื่น ๆ ในที่ที่มันรักษา collection ขององค์ประกอบที่ไม่ซ้ำกันและอนุญาตให้ดำเนินการเช่นการแทรก การลบ และการค้นหา แต่องค์ประกอบใน `BTreeSet` จะถูกเรียงตามความสัมพันธ์การเรียงลำดับซึ่งอาจถูกปรับแต่งโดยผู้ใช้ การเรียงลำดับนี้ช่วยให้การค้นหาช่วงเป็นไปอย่างมีประสิทธิภาพรวมถึงการดำเนินการอื่น ๆ เช่นการค้นหาองค์ประกอบต่ำสุดหรือสูงสุด