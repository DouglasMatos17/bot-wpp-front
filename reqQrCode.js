async function fetchQRCode() {
    try {
        const response = await fetch('https://whatsapp-bot-production-b594.up.railway.app/qr');
        const qrCodeData = await response.text();
        const qrcodeElement = document.getElementById('qrcode');
        // Configuração do QR code
        let qrcode = new QRCode(qrcodeElement, {
            text: qrCodeData,
            width: 350,
            height: 350,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch (error) {
        console.error('Erro ao buscar o QR code:', error);
    }
    }

window.onload = fetchQRCode;