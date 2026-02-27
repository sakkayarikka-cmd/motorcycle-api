export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "กรุณาใช้ POST method เท่านั้น"
    });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      message: "กรุณาส่งข้อความมาด้วย"
    });
  }

  let reply = "";

  const text = message.toLowerCase();

  if (text.includes("สวัสดี")) {
    reply = "สวัสดีครับ 😊 มีอะไรให้ช่วยเกี่ยวกับรถมอเตอร์ไซค์ไหม?";
  } 
  else if (text.includes("ราคา")) {
    reply = "รถมีราคาตั้งแต่ 199,000 - 226,000 บาท";
  } 
  else if (text.includes("honda")) {
    reply = "Honda รุ่นยอดนิยมคือ CBR500R";
  } 
  else if (text.includes("yamaha")) {
    reply = "Yamaha รุ่นแนะนำคือ R3";
  } 
  else {
    reply = "ขอโทษครับ ผมยังไม่เข้าใจคำถามนี้";
  }

  res.status(200).json({
    user: message,
    bot: reply
  });
}