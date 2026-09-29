// ฟังก์ชันสำหรับกดฟังเสียง (อ่านข้อความภาษาไทย)
function speakText(text) {
    if ('speechSynthesis' in window) {
        // หยุดเสียงที่กำลังพูดค้างอยู่ก่อน
        window.speechSynthesis.cancel();
        
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'th-TH'; // ตั้งค่าภาษาไทย
        utterance.rate = 1.0; // ความเร็วในการพูด (ปรับลดลงได้ถ้าอยากให้ช้าลง เช่น 0.9)
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert("เบราว์เซอร์ของคุณไม่รองรับการอ่านออกเสียง");
    }
}








// ฟังก์ชันคำนวณยอดเงินรวมอัตโนมัติ
function calculateTotal() {
    let krungthai = parseFloat(document.getElementById('krungthai').value) || 0;
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    
    // แก๊ส: ถังละ 450 บาท
    let gasCount = parseFloat(document.getElementById('gas').value) || 0;
    let gasTotal = gasCount * 450; 

    // รวมยอด: กรุงไทย + เงินสด + แก๊ส (ไม่รวมข้าว)
    let total = krungthai + cash + gasTotal;

    document.getElementById('totalResult').innerText = total.toLocaleString() + " บาท";
}

// ฟังก์ชันคัดลอกข้อมูลสรุป
function copyData() {
    let krungthaiVal = parseFloat(document.getElementById('krungthai').value) || 0;
    let cashVal = parseFloat(document.getElementById('cash').value) || 0;
    let gasVal = parseFloat(document.getElementById('gas').value) || 0;
    let riceVal = parseFloat(document.getElementById('rice').value) || 0;
    
    let totalVal = document.getElementById('totalResult').innerText;

    // ฟังก์ชันช่วยจัดการบรรทัด: ถ้ามีข้อมูลให้ใส่ในวงเล็บ ถ้าไม่มีให้ลบวงเล็บทิ้งเหลือแค่ชื่อหัวข้อ
    function formatLine(label, val) {
        if (val !== "" && val !== null && val !== undefined && val !== 0 && val !== "0" && val !== "0/0") {
            return `${label} ${val}`;
        } else {
            return `${label}`; // ไม่มีข้อมูล ลบวงเล็บทิ้ง เหลือแค่หัวข้อ
        }
    }

    // --- ดึงข้อมูลไก่สด (อันที่ 1: น.ส, อันที่ 2: น่อง, อันที่ 3: ปีก, อันที่ 4: โครง) ---
    let f_ns1 = document.getElementById('fresh_ns1')?.value || "";
    let f_ns2 = document.getElementById('fresh_ns2')?.value || "";
    let freshNs = (f_ns1 || f_ns2) ? `${f_ns1}/${f_ns2}` : "";

    let f_nong1 = document.getElementById('fresh_nong1')?.value || "";
    let f_nong2 = document.getElementById('fresh_nong2')?.value || "";
    let freshNong = (f_nong1 || f_nong2) ? `${f_nong1}/${f_nong2}` : "";

    let f_peek1 = document.getElementById('fresh_peek1')?.value || "";
    let f_peek2 = document.getElementById('fresh_peek2')?.value || "";
    let freshPeek = (f_peek1 || f_peek2) ? `${f_peek1}/${f_peek2}` : "";

    let f_bone1 = document.getElementById('fresh_bone1')?.value || "";
    let f_bone2 = document.getElementById('fresh_bone2')?.value || "";
    let freshBone = (f_bone1 || f_bone2) ? `${f_bone1}/${f_bone2}` : "";

    // --- ดึงข้อมูลไก่ทอด ---
    let friedNs = document.getElementById('fried_ns')?.value || "";
    let friedNong = document.getElementById('fried_nong')?.value || "";
    let friedPeek = document.getElementById('fried_peek')?.value || "";
    let friedBone = document.getElementById('fried_bone')?.value || "";

    // --- ดึงข้อมูลไก่เหลือ ---
    let leftNs = document.getElementById('left_ns')?.value || "";
    let leftNong = document.getElementById('left_nong')?.value || "";
    let leftPeek = document.getElementById('left_peek')?.value || "";
    let leftBone = document.getElementById('left_bone')?.value || "";

    // --- ดึงข้อมูลไก่กิน ---
    let eatNs = document.getElementById('eat_ns')?.value || "";
    let eatNong = document.getElementById('eat_nong')?.value || "";
    let eatPeek = document.getElementById('eat_peek')?.value || "";
    let eatBone = document.getElementById('eat_bone')?.value || "";

    // ข้าว: เอาจำนวนที่กรอกไปคูณ 11
    let riceResult = riceVal > 0 ? (riceVal * 7) : "";

    // --- เรียงบรรทัดทั้งหมดครบถ้วนตามต้องการ ห้ามลบแม้แต่บรรทัดเดียว ---
    let textLines = [
        "ไก่สด",
        formatLine("น.ส", freshNs),
        formatLine("น่อง", freshNong),
        formatLine("ปีก", freshPeek),
        formatLine("โครง", freshBone),
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








// ฟังก์ชันเปิด-ปิด หน้าต่างป๊อปอัป
function openAiModal() {
    document.getElementById('aiModal').style.display = 'flex';
}
function closeAiModal() {
    document.getElementById('aiModal').style.display = 'none';
}

// ฟังก์ชันระบบเสียงพูด (Text-to-Speech)
function speakMessage(text, btnElement) {
    if (!('speechSynthesis' in window)) {
        alert('เบราว์เซอร์ของคุณไม่รองรับการอ่านออกเสียง');
        return;
    }
    
    // ถ้ารอบริบทราบว่ากำลังพูดอยู่ ให้หยุดก่อน
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'th-TH'; // ตั้งค่าเสียงภาษาไทย
    
    // เปลี่ยนสไตล์ปุ่มเวลาพูดเสร็จ
    utterance.onend = () => {
        btnElement.style.background = '#3b6fe0';
        btnElement.textContent = '🔊 ฟังเสียง';
    };

    btnElement.style.background = '#2ed573'; // เปลี่ยนสีปุ่มตอนกำลังพูด
    btnElement.textContent = '🔊 กำลังพูด...';
    
    window.speechSynthesis.speak(utterance);
}

// ฟังก์ชันกดส่งข้อความ (จำลองรับคำสั่ง ส่งกลับมาเหมือนเดิม + สร้างปุ่มเสียงพูด)
function sendTextToAi() {
    const input = document.getElementById('aiInput');
    const text = input.value.trim();
    if (!text) return;

    const chatBox = document.getElementById('aiChatBox');

    // 1. แสดงข้อความฝั่งผู้ใช้ (User)
    const userMsg = document.createElement('div');
    userMsg.style.cssText = 'background: #3b6fe0; padding: 10px 12px; border-radius: 12px; max-width: 80%; align-self: flex-end; font-size: 14px; word-break: break-word;';
    userMsg.textContent = text;
    chatBox.appendChild(userMsg);

    input.value = ''; //เคลียร์ช่องพิมพ์
    chatBox.scrollTop = chatBox.scrollHeight;

    // 2. จำลองการตอบกลับจากระบบ/AI (ส่งข้อความเดิมกลับมาพร้อมปุ่มกดฟังเสียง)
    setTimeout(() => {
        const aiRow = document.createElement('div');
        aiRow.style.cssText = 'display: flex; flex-direction: column; align-items: flex-start; gap: 6px; max-width: 85%;';
        
        const aiBubble = document.createElement('div');
        aiBubble.style.cssText = 'background: #2a2f3a; padding: 10px 12px; border-radius: 12px; font-size: 14px; word-break: break-word; width: 100%;';
        aiBubble.textContent = text; // ส่งข้อความกลับมาแบบเดิมตามที่คุณต้องการ

        // สร้างปุ่มกดฟังเสียง 🔊
        const speakBtn = document.createElement('button');
        speakBtn.style.cssText = 'background: #3b6fe0; color: white; border: none; border-radius: 6px; padding: 6px 12px; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 4px;';
        speakBtn.innerHTML = '🔊 ฟังเสียง';
        
        // ผูกฟังก์ชันกดอ่านเสียง
        speakBtn.onclick = () => speakMessage(text, speakBtn);

        aiRow.appendChild(aiBubble);
        aiRow.appendChild(speakBtn);
        chatBox.appendChild(aiRow);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);
}
