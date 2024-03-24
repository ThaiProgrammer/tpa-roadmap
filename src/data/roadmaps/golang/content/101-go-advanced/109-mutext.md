# Mutex

Go ช่วยให้เราสามารถรันโค้ดแบบ concurrent ได้โดยใช้ goroutines ซึ่งเมื่อกระบวนการ concurrent คือการเข้าถึงข้อมูลเดียวกันพร้อมกัน อาจเกิด [race conditions](https://www.sohamkamani.com/golang/data-races/) ขึ้นได้ ดังนั้น Mutexes จะเป็นโครงสร้างข้อมูลที่ Go มีให้ใน [sync](https://pkg.go.dev/sync/) package ซึ่งช่วยให้เราวางล็อกบนส่วนต่างๆของข้อมูล เพื่อให้มีเพียง goroutine เดียวที่สามารถเข้าถึงข้อมูลได้ในเวลาเดียวกัน

ดูแหล่งข้อมูลต่อไปนี้เพื่อเรียนรู้เพิ่มเติม:

- [ Using a Mutex in Go with Examples](https://www.sohamkamani.com/golang/mutex/)
