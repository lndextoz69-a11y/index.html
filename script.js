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

// ฟังก์ชันคัดลอกข้อมูลสรุปตามรูปแบบที่คุณต้องการ
function copyData() {
    let krungthaiVal = parseFloat(document.getElementById('krungthai').value) || 0;
    let cashVal = parseFloat(document.getElementById('cash').value) || 0;
    let gasVal = parseFloat(document.getElementById('gas').value) || 0;
    let riceVal = parseFloat(document.getElementById('rice').value) || 0;
    
    let totalVal = document.getElementById('totalResult').innerText;

    let textLines = [];

    // --- 1. ไก่สด ---
    let freshNs1 = document.getElementById('fresh_ns1')?.value || "";
    let freshNs2 = document.getElementById('fresh_ns2')?.value || "";
    let freshNong1 = document.getElementById('fresh_nong1')?.value || "";
    let freshNong2 = document.getElementById('fresh_nong2')?.value || "";
    let freshPeek1 = document.getElementById('fresh_peek1')?.value || "";
    let freshPeek2 = document.getElementById('fresh_peek2')?.value || "";
    let freshBone1 = document.getElementById('fresh_bone1')?.value || "";
    let freshBone2 = document.getElementById('fresh_bone2')?.value || "";

    let freshLines = [];
    if (freshNs1 || freshNs2) freshLines.push(`น.ส (${freshNs1}/${freshNs2})`);
    if (freshNong1 || freshNong2) freshLines.push(`น่อง (${freshNong1}/${freshNong2})`);
    if (freshPeek1 || freshPeek2) freshLines.push(`ปีก (${freshPeek1}/${freshPeek2})`);
    if (freshBone1 || freshBone2) freshLines.push(`โครง (${freshBone1}/${freshBone2})`);

    if (freshLines.length > 0) {
        textLines.push("ไก่สด");
        textLines.push(...freshLines);
    }

    // --- 2. ไก่ทอด ---
    let friedNs = document.getElementById('fried_ns')?.value || "";
    let friedNong = document.getElementById('fried_nong')?.value || "";
    let friedPeek = document.getElementById('fried_peek')?.value || "";
    let friedBone = document.getElementById('fried_bone')?.value || "";

    let friedLines = [];
    if (friedNs) friedLines.push(`น.ส (${friedNs})`);
    if (friedNong) friedLines.push(`น่อง (${friedNong})`);
    if (friedPeek) friedLines.push(`ปีก (${friedPeek})`);
    if (friedBone) friedLines.push(`โครง (${friedBone})`);

    if (friedLines.length > 0) {
        textLines.push("ไก่ทอด");
        textLines.push(...friedLines);
    }

    // --- 3. ไก่เหลือ ---
    let leftNs = document.getElementById('left_ns')?.value || "";
    let leftNong = document.getElementById('left_nong')?.value || "";
    let leftPeek = document.getElementById('left_peek')?.value || "";
    let leftBone = document.getElementById('left_bone')?.value || "";

    let leftLines = [];
    if (leftNs) leftLines.push(`น.ส (${leftNs})`);
    if (leftNong) leftLines.push(`น่อง (${leftNong})`);
    if (leftPeek) leftLines.push(`ปีก (${leftPeek})`);
    if (leftBone) leftLines.push(`โครง (${leftBone})`);

    if (leftLines.length > 0) {
        textLines.push("ไก่เหลือ");
        textLines.push(...leftLines);
    }

    // --- 4. ไก่กิน ---
    let eatNs = document.getElementById('eat_ns')?.value || "";
    let eatNong = document.getElementById('eat_nong')?.value || "";
    let eatPeek = document.getElementById('eat_peek')?.value || "";
    let eatBone = document.getElementById('eat_bone')?.value || "";

    let eatLines = [];
    if (eatNs) eatLines.push(`น.ส (${eatNs})`);
    if (eatNong) eatLines.push(`น่อง (${eatNong})`);
    if (eatPeek) eatLines.push(`ปีก (${eatPeek})`);
    if (eatBone) eatLines.push(`โครง (${eatBone})`);

    if (eatLines.length > 0) {
        textLines.push("ไก่กิน");
        textLines.push(...eatLines);
    }

    // --- 5. แก๊ส, ข้าว, ยอดโอน, เงินสด, รวมยอด ---
    if (gasVal > 0) {
        textLines.push(`แก๊ส (${gasVal})`);
    }
    
    if (riceVal > 0) {
        let riceResult = riceVal * 11;
        textLines.push(`ข้าว (${riceResult})`);
    }
    
    if (krungthaiVal > 0) {
        textLines.push(`ยอดโอน (${krungthaiVal})`);
    }
    
    if (cashVal > 0) {
        textLines.push(`เงินสด (${cashVal})`);
    }

    textLines.push(`รวมยอด (${totalVal})`);

    // รวมข้อความทั้งหมด
    let textToCopy = textLines.join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("คัดลอกข้อมูลเรียบร้อยแล้ว!");
    }).catch(err => {
        console.error('เกิดข้อผิดพลาด: ', err);
    });
}
