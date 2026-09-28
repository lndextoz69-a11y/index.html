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

// ฟังก์ชันคัดลอกข้อมูลสรุป (แสดงทุกบรรทัดครบถ้วน ลบเฉพาะวงเล็บเมื่อไม่มีข้อมูล)
function copyData() {
    let krungthaiVal = parseFloat(document.getElementById('krungthai').value) || 0;
    let cashVal = parseFloat(document.getElementById('cash').value) || 0;
    let gasVal = parseFloat(document.getElementById('gas').value) || 0;
    let riceVal = parseFloat(document.getElementById('rice').value) || 0;
    
    let totalVal = document.getElementById('totalResult').innerText;

    // ฟังก์ชันช่วยเช็กค่า ถ้ามีให้ใส่ในวงเล็บ ถ้าไม่มีให้เว้นว่างในวงเล็บหรือลบวงเล็บออกตามต้องการ
    // เงื่อนไข: ถ้าไม่มีข้อมูล ให้ลบวงเล็บทิ้ง เหลือแต่ข้อความข้างหน้า
    function formatLine(label, val) {
        if (val !== "" && val !== null && val !== undefined && val !== 0 && val !== "0") {
            return `${label} (${val})`;
        } else {
            return `${label}`; // ไม่มีข้อมูล เหลือแค่ข้อความข้างหน้า ไม่มีวงเล็บ
        }
    }

    // --- ดึงข้อมูลแต่ละช่อง ---
    let freshNs1 = document.getElementById('fresh_ns1')?.value || "";
    let freshNs2 = document.getElementById('fresh_ns2')?.value || "";
    let freshNsVal = (freshNs1 || freshNs2) ? `${freshNs1}/${freshNs2}` : "";

    let freshNong1 = document.getElementById('fresh_nong1')?.value || "";
    let freshNong2 = document.getElementById('fresh_nong2')?.value || "";
    let freshNongVal = (freshNong1 || freshNong2) ? `${freshNong1}/${freshNong2}` : "";

    let freshPeek1 = document.getElementById('fresh_peek1')?.value || "";
    let freshPeek2 = document.getElementById('fresh_peek2')?.value || "";
    let freshPeekVal = (freshPeek1 || freshPeek2) ? `${freshPeek1}/${freshPeek2}` : "";

    let freshBone1 = document.getElementById('fresh_bone1')?.value || "";
    let freshBone2 = document.getElementById('fresh_bone2')?.value || "";
    let freshBoneVal = (freshBone1 || freshBone2) ? `${freshBone1}/${freshBone2}` : "";


    let friedNs = document.getElementById('fried_ns')?.value || "";
    let friedNong = document.getElementById('fried_nong')?.value || "";
    let friedPeek = document.getElementById('fried_peek')?.value || "";
    let friedBone = document.getElementById('fried_bone')?.value || "";

    let leftNs = document.getElementById('left_ns')?.value || "";
    let leftNong = document.getElementById('left_nong')?.value || "";
    let leftPeek = document.getElementById('left_peek')?.value || "";
    let leftBone = document.getElementById('left_bone')?.value || "";

    let eatNs = document.getElementById('eat_ns')?.value || "";
    let eatNong = document.getElementById('eat_nong')?.value || "";
    let eatPeek = document.getElementById('eat_peek')?.value || "";
    let eatBone = document.getElementById('eat_bone')?.value || "";

    let riceResult = riceVal > 0 ? (riceVal * 11) : "";

    // --- จัดเรียงข้อความทุกบรรทัดแบบห้ามตกหล่น ---
    let textLines = [
        "ไก่สด",
        formatLine("น.ส", freshNsVal),
        formatLine("น่อง", freshNongVal),
        formatLine("ปีก", freshPeekVal),
        formatLine("โครง", freshBoneVal),
        "",
        "ไก่ทอด",
        formatLine("น.ส", friedNs),
        formatLine("น่อง", friedNong),
        formatLine("ปีก", friedPeek),
        formatLine("โครง", friedBone),
        "",
        "ไก่เหลือ",
        formatLine("น.ส", leftNs),
        formatLine("น่อง", leftNong),
        formatLine("ปีก", leftPeek),
        formatLine("โครง", leftBone),
        "",
        "ไก่กิน",
        formatLine("น.ส", eatNs),
        formatLine("น่อง", eatNong),
        formatLine("ปีก", eatPeek),
        formatLine("โครง", eatBone),
        "",
        formatLine("แก๊ส", gasVal > 0 ? gasVal : ""),
        formatLine("ข้าว", riceResult),
        formatLine("ยอดโอน", krungthaiVal > 0 ? krungthaiVal : ""),
        formatLine("เงินสด", cashVal > 0 ? cashVal : ""),
        `รวมยอด (${totalVal})`
    ];

    let textToCopy = textLines.join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("คัดลอกข้อมูลเรียบร้อยแล้ว!");
    }).catch(err => {
        console.error('เกิดข้อผิดพลาด: ', err);
    });
}
