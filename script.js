// ฟังก์ชันคำนวณยอดเงินรวมอัตโนมัติ
function calculateTotal() {
    let krungthai = parseFloat(document.getElementById('krungthai').value) || 0;
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    
    // แก๊ส: ถ้ามีใส่จำนวนถัง จะเอาไปคูณ 450 แล้วบวกเข้ายอดรวม
    let gasCount = parseFloat(document.getElementById('gas').value) || 0;
    let gasTotal = gasCount * 450; 

    // รวมยอดทั้งหมด: กรุงไทย + เงินสด + แก๊ส (ไม่รวมข้าว)
    let total = krungthai + cash + gasTotal;

    document.getElementById('totalResult').innerText = total.toLocaleString() + " บาท";
}

// ฟังก์ชันคัดลอกข้อมูลสรุป (ตรวจสอบและซ่อนรายการที่ไม่ได้กรอกข้อมูลทิ้งทันที)
function copyData() {
    // ดึงค่าช่องการเงิน
    let krungthaiVal = parseFloat(document.getElementById('krungthai').value) || 0;
    let cashVal = parseFloat(document.getElementById('cash').value) || 0;
    let gasVal = parseFloat(document.getElementById('gas').value) || 0;
    let riceVal = parseFloat(document.getElementById('rice').value) || 0;
    
    let totalVal = document.getElementById('totalResult').innerText;

    // เริ่มต้นสร้างข้อความหลัก
    let textLines = ["สรุปยอดส่งงาน:"];

    // --- ไก่สด ---
    let freshNs1 = document.getElementById('fresh_ns1')?.value || "";
    let freshNs2 = document.getElementById('fresh_ns2')?.value || "";
    let freshNong1 = document.getElementById('fresh_nong1')?.value || "";
    let freshNong2 = document.getElementById('fresh_nong2')?.value || "";
    let freshPeek1 = document.getElementById('fresh_peek1')?.value || "";
    let freshPeek2 = document.getElementById('fresh_peek2')?.value || "";
    let freshBone1 = document.getElementById('fresh_bone1')?.value || "";
    let freshBone2 = document.getElementById('fresh_bone2')?.value || "";

    // ตรวจสอบแต่ละรายการของไก่สด ถ้ากรอกค่อยดึงมาแสดง
    let freshList = [];
    if (freshNs1 || freshNs2) freshList.push(`- น.ส: ${freshNs1}/${freshNs2}`);
    if (freshNong1 || freshNong2) freshList.push(`- น่อง: ${freshNong1}/${freshNong2}`);
    if (freshPeek1 || freshPeek2) freshList.push(`- ปีก: ${freshPeek1}/${freshPeek2}`);
    if (freshBone1 || freshBone2) freshList.push(`- โครง: ${freshBone1}/${freshBone2}`);

    if (freshList.length > 0) {
        textLines.push("ไก่สด");
        textLines.push(...freshList);
    }

    // --- ไก่ทอด ---
    let friedNs = document.getElementById('fried_ns')?.value || "";
    let friedNong = document.getElementById('fried_nong')?.value || "";
    let friedPeek = document.getElementById('fried_peek')?.value || "";
    let friedBone = document.getElementById('fried_bone')?.value || "";

    let friedList = [];
    if (friedNs) friedList.push(`- น.ส: ${friedNs}`);
    if (friedNong) friedList.push(`- น่อง: ${friedNong}`);
    if (friedPeek) friedList.push(`- ปีก: ${friedPeek}`);
    if (friedBone) friedList.push(`- โครง: ${friedBone}`);

    if (friedList.length > 0) {
        textLines.push("ไก่ทอด");
        textLines.push(...friedList);
    }

    // --- ไก่เหลือ ---
    let leftNs = document.getElementById('left_ns')?.value || "";
    let leftNong = document.getElementById('left_nong')?.value || "";
    let leftPeek = document.getElementById('left_peek')?.value || "";
    let leftBone = document.getElementById('left_bone')?.value || "";

    let leftList = [];
    if (leftNs) leftList.push(`- น.ส: ${leftNs}`);
    if (leftNong) leftList.push(`- น่อง: ${leftNong}`);
    if (leftPeek) leftList.push(`- ปีก: ${leftPeek}`);
    if (leftBone) leftList.push(`- โครง: ${leftBone}`);

    if (leftList.length > 0) {
        textLines.push("ไก่เหลือ");
        textLines.push(...leftList);
    }

    // --- ไก่กิน ---
    let eatNs = document.getElementById('eat_ns')?.value || "";
    let eatNong = document.getElementById('eat_nong')?.value || "";
    let eatPeek = document.getElementById('eat_peek')?.value || "";
    let eatBone = document.getElementById('eat_bone')?.value || "";

    let eatList = [];
    if (eatNs) eatList.push(`- น.ส: ${eatNs}`);
    if (eatNong) eatList.push(`- น่อง: ${eatNong}`);
    if (eatPeek) eatList.push(`- ปีก: ${eatPeek}`);
    if (eatBone) eatList.push(`- โครง: ${eatBone}`);

    if (eatList.length > 0) {
        textLines.push("ไก่กิน");
        textLines.push(...eatList);
    }

    // --- แก๊ส ข้าว ยอดโอน เงินสด รวมยอด ---
    if (gasVal > 0) {
        textLines.push(`แก๊ส: ${gasVal}`);
    }
    if (riceVal > 0) {
        let riceResult = riceVal * 11;
        textLines.push(`ข้าว: ${riceResult}`);
    }
    if (krungthaiVal > 0) {
        textLines.push(`ยอดโอน: ${krungthaiVal}`);
    }
    if (cashVal > 0) {
        textLines.push(`เงินสด: ${cashVal}`);
    }

    textLines.push(`รวมยอด: ${totalVal}`);

    // รวมข้อความทั้งหมดคั่นด้วยบรรทัดใหม่
    let textToCopy = textLines.join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("คัดลอกข้อมูลเรียบร้อยแล้ว!");
    }).catch(err => {
        console.error('เกิดข้อผิดพลาด: ', err);
    });
}
