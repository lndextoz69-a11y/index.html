// ฟังก์ชันคำนวณยอดเงินรวมอัตโนมัติ
function calculateTotal() {
    let krungthai = parseFloat(document.getElementById('krungthai').value) || 0;
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    
    // แก๊ส: ถ้ามีใส่จำนวนถัง จะเอาไปคูณ 450 แล้วบวกเข้ายอดรวม ถ้าไม่มี/เป็น 0 จะไม่บวก
    let gasCount = parseFloat(document.getElementById('gas').value) || 0;
    let gasTotal = gasCount * 450; 

    // ข้าว: คำนวณไว้เบื้องหลังอย่างเดียว (รอบ x 11) แต่ "ไม่เอา" ไปบวกเข้ากับยอดเงินรวม
    let riceCount = parseFloat(document.getElementById('rice').value) || 0;
    let riceBackgroundMoney = riceCount * 11; // คำนวณเก็บไว้เบื้องหลังเพื่อรอเอาไปดึงตอนคัดลอก

    // รวมยอดทั้งหมด: คิดแค่ กรุงไทย + เงินสด + แก๊ส (ข้าวถูกตัดออกไป ไม่นำมารวมเงิน)
    let total = krungthai + cash + gasTotal;

    document.getElementById('totalResult').innerText = total.toLocaleString() + " บาท";
}

// ฟังก์ชันคัดลอกข้อมูลสรุป (ดึงข้อมูลเบื้องหลังของข้าวมาแสดงตอนคัดลอกลงแชท)
function copyData() {
    let krungthaiVal = document.getElementById('krungthai').value || 0;
    let cashVal = document.getElementById('cash').value || 0;
    let gasVal = document.getElementById('gas').value || 0;
    let riceVal = document.getElementById('rice').value || 0;
    
    let gasMoney = gasVal * 450;
    
    // ดึงผลลัพธ์ที่คำนวณเบื้องหลังของข้าวมาใช้ตรงนี้ (เช่น ใส่ 7 รอบ จะได้ 77 บาท)
    let riceMoney = riceVal * 11; 

    let totalVal = document.getElementById('totalResult').innerText;

    // จัดรูปแบบข้อความที่จะคัดลอกไปวางในแชท (ดึงข้อมูลเบื้องหลังของข้าวมาแสดง)
    let textToCopy = `สรุปยอดส่งงาน:\n- กรุงไทย: ${krungthaiVal} บาท\n- เงินสด: ${cashVal} บาท\n- แก๊ส: ${gasVal} ถัง (${gasMoney} บาท)\n- ข้าว: ${riceVal} รอบ (ยอดคำนวณเบื้องหลัง: ${riceMoney} บาท)\n- รวมทั้งสิ้น: ${totalVal}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("คัดลอกข้อมูลเรียบร้อยแล้ว!");
    }).catch(err => {
        console.error('เกิดข้อผิดพลาด: ', err);
    });
}
