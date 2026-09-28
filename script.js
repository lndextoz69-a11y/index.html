// ฟังก์ชันคำนวณยอดเงินรวม
function calculateTotal() {
    let krungthai = parseFloat(document.getElementById('krungthai').value) || 0;
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    let total = krungthai + cash;

    document.getElementById('totalResult').innerText = total.toLocaleString() + " บาท";
}

// ฟังก์ชันคัดลอกข้อมูลสรุป
function copyData() {
    let krungthaiVal = document.getElementById('krungthai').value || 0;
    let cashVal = document.getElementById('cash').value || 0;
    let totalVal = document.getElementById('totalResult').innerText;

    let textToCopy = `สรุปยอดส่งงาน:\n- กรุงไทย: ${krungthaiVal} บาท\n- เงินสด: ${cashVal} บาท\n- รวมทั้งสิ้น: ${totalVal}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("คัดลอกข้อมูลเรียบร้อยแล้ว!");
    }).catch(err => {
        console.error('เกิดข้อผิดพลาด: ', err);
    });
}

