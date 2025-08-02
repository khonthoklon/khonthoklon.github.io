import { useRef, useCallback } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { ROUTES } from "../constants/routes";

interface QRCodeViewProps {
  certificateId: string;
  size?: number;
}

const QR: React.FC<QRCodeViewProps> = ({ certificateId, size = 200 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const HOST_ORIGIN = "https://khonthoklon.github.io";
  const certificateUrl = `${HOST_ORIGIN}/#${ROUTES.buildCertificateDetail(
    certificateId
  )}`;

  const handleDownload = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `QR_${certificateId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [certificateId]);

  return (
    <div className="flex flex-col items-center">
      <QRCodeCanvas
        value={certificateUrl}
        marginSize={2}
        size={size}
        level="H"
        ref={canvasRef}
        className="border rounded bg-white"
      />
      <button
        onClick={handleDownload}
        className="mt-3 px-4 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700 text-sm"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default QR;
