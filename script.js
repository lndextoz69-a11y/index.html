
// ฟังก์ชันคำนวณยอดรวมอัตโนมัติ (กรุงไทย + เงินสด)
function calculateTotal() {
    let krungthai = parseFloat(document.getElementById('krungthai').value) || 0;
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    
    // สมมติแก๊ส ตั้งไว้ 0 หรือดึงค่าเพิ่มได้ตามต้องการ
    let gas = 0; 

    let total = krungthai + cash + gas;

    // แสดงผลที่ช่องยอดรวม
    document.getElementById('totalResult').innerText = total.toLocaleString() + " บาท";
}

// ฟังก์ชันคัดลอกข้อมูล
function copyData() {
    let textToCopy = "สรุปข้อมูลยอดขายและรายการไก่:\n" +
                     "- กรุงไทย: " + (document.getElementById('krungthai').value || 0) + " บาท\n" +
                     "- เงินสด: " + (document.getElementById('cash').value || 0) + " บาท\n" +
                     "ยอดรวมทั้งหมด: " + document.getElementById('totalResult').innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("คัดลอกข้อมูลเรียบร้อยแล้ว!");
    }).catch(err => {
        console.error('เกิดข้อผิดพลาดในการคัดลอก: ', err);
    });
}
