# Grpc gateway

gRPC-Gateway เป็นเครื่องมือที่สร้างชั้นบนบริการของ gRPC ซึ่งจะทำหน้าที่เป็น RESTful service สำหรับ client โดยเป็น plugin ของ protoc มันอ่าน gRPC ที่กำหนดขึ้น และสร้างเซิร์ฟเวอร์ reverse-proxy ที่แปลง RESTful JSON API เป็น gRPC ให้กับ client ที่สามารถใช้งานได้

ดูแหล่งข้อมูลต่อไปนี้เพื่อเรียนรู้เพิ่มเติม:

- [Grpc-gateway Github](https://github.com/grpc-ecosystem/grpc-gateway/)
- [Grpc-gateway Doc](https://grpc-ecosystem.github.io/grpc-gateway/)
