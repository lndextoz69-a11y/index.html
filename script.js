// ฟังก์ชันคำนวณยอดเงินรวมอัตโนมัติ
function calculateTotal() {
    let krungthai = parseFloat(document.getElementById('krungthai').value) || 0;
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    
    // ดึงค่าแก๊ส (สมมติให้ช่องแก๊สมี id="gas")
    let gasCount = parseFloat(document.getElementById('gas').value) || 0;
    let gasTotal = gasCount * 450; // ถังละ 450 บาท

    // ดึงค่าข้าว (สมมติให้ช่องข้าวมี id="rice")
    let riceCount = parseFloat(document.getElementById('rice').value) || 0;
    let riceTotal = riceCount * 11; // รอบละ 11

    // รวมยอดทั้งหมดตามสูตร
    let total = krungthai + cash + gasTotal + riceTotal;

    document.getElementById('totalResult').innerText = total.toLocaleString() + " บาท";
}

// ฟังก์ชันคัดลอกข้อมูลสรุป
function copyData() {
    let krungthaiVal = document.getElementById('krungthai').value || 0;
    let cashVal = document.getElementById('cash').value || 0;
    let gasVal = document.getElementById('gas').value || 0;
    let riceVal = document.getElementById('rice').value || 0;
    let totalVal = document.getElementById('totalResult').innerText;

    let textToCopy = `สรุปยอดส่งงาน:\n- กรุงไทย: ${krungthaiVal} บาท\n- เงินสด: ${cashVal} บาท\n- แก๊ส: ${gasVal} ถัง\n- ข้าว: ${riceVal} รอบ\n- รวมทั้งสิ้น: ${totalVal}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("คัดลอกข้อมูลเรียบร้อยแล้ว!");
    }).catch(err => {
        console.error('เกิดข้อผิดพลาด: ', err);
    });
}
