// ฟังก์ชันดึงรูปภาพจาก URL มาแสดงในกรอบ
function updateImage(boxId, url) {
    let box = document.getElementById('box-' + boxId);
    if (url.trim() !== "") {
        box.innerHTML = `<img src="${url.trim()}" alt="image" onerror="this.onerror=null; this.parentNode.innerHTML='ลิงก์ผิด';">`;
    } else {
        // คืนค่าข้อความเดิมถ้าลบลิงก์ออก
        if (boxId.startsWith('eat') || boxId === 'gas' || boxId === 'rice' || boxId === 'ktb' || boxId === 'cash') {
            box.innerHTML = `<span>รูป</span>`;
        } else {
            box.innerHTML = `<span>png , jpg</span>`;
        }
    }
}

// ฟังก์ชันคำนวณยอดรวม (กรุงไทย + เงินสด)
function calculateTotal() {
    let krungthai = parseFloat(document.getElementById('krungthai').value) || 0;
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    let total = krungthai + cash;

    document.getElementById('totalResult').innerText = total.toLocaleString() + " บาท";
}

// ฟังก์ชันคัดลอกข้อมูลสรุป
function copyData() {
    let textToCopy = "สรุปยอดขาย:\n" +
                     "- กรุงไทย: " + (document.getElementById('krungthai').value || 0) + " บาท\n" +
                     "- เงินสด: " + (document.getElementById('cash').value || 0) + " บาท\n" +
                     "ยอดรวมทั้งหมด: " + document.getElementById('totalResult').innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("คัดลอกข้อมูลเรียบร้อยแล้ว!");
    }).catch(err => {
        console.error('เกิดข้อผิดพลาด: ', err);
    });
}

