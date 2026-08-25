/**
 * Canvas録画 & スクリーンショットユーティリティ
 * MediaRecorder API で WebM 動画録画、toDataURL で PNG キャプチャ
 */
export class Recorder {
  /**
   * @param {HTMLCanvasElement} canvas - 録画対象のキャンバス
   */
  constructor(canvas) {
    this.canvas = canvas;
    /** @type {MediaRecorder|null} */
    this.mediaRecorder = null;
    /** @type {Blob[]} */
    this.chunks = [];
    this.isRecording = false;
  }

  /**
   * 現在のキャンバスをPNG画像として保存
   * @param {string} filename - ファイル名
   */
  captureScreenshot(filename = 'art-capture.png') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = this.canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /** WebM動画録画を開始 */
  startRecording() {
    if (this.isRecording) return;

    try {
      const stream = this.canvas.captureStream(60);

      // 利用可能なMIMEタイプを検出
      const mimeTypes = [
        'video/webm;codecs=vp9',
        'video/webm;codecs=vp8',
        'video/webm',
      ];
      let mimeType = '';
      for (const type of mimeTypes) {
        if (MediaRecorder.isTypeSupported(type)) {
          mimeType = type;
          break;
        }
      }

      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: mimeType || undefined,
        videoBitsPerSecond: 8_000_000,
      });

      this.chunks = [];

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) this.chunks.push(e.data);
      };

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: mimeType || 'video/webm' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `art-recording-${Date.now()}.webm`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
        this.chunks = [];
      };

      this.mediaRecorder.start(1000); // 1秒ごとにデータチャンク
      this.isRecording = true;
    } catch (err) {
      console.error('録画開始エラー:', err);
      this.isRecording = false;
    }
  }

  /** 録画を停止し保存 */
  stopRecording() {
    if (!this.isRecording || !this.mediaRecorder) return;
    try {
      this.mediaRecorder.stop();
    } catch (err) {
      console.error('録画停止エラー:', err);
    }
    this.isRecording = false;
  }

  /**
   * 録画の開始/停止を切り替え
   * @returns {boolean} 切り替え後の録画状態
   */
  toggleRecording() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
    return this.isRecording;
  }
}
