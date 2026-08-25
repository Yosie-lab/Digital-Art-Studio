/**
 * Web Audio API を使ったリアルタイム音声解析ユーティリティ
 * マイク入力の周波数帯域（低・中・高音）と音量をリアルタイム解析
 */
export class AudioAnalyzer {
  constructor() {
    /** @type {AudioContext|null} */
    this.audioCtx = null;
    /** @type {AnalyserNode|null} */
    this.analyser = null;
    /** @type {Uint8Array|null} 波形データ */
    this.waveformData = null;
    /** @type {Uint8Array|null} 周波数データ */
    this.frequencyData = null;
    /** @type {MediaStream|null} */
    this.stream = null;
    this.isActive = false;

    // 解析結果（0-1 正規化）
    this.volume = 0;
    this.bass = 0;
    this.mid = 0;
    this.treble = 0;
  }

  /**
   * マイク入力を開始し、音声解析を有効化
   * @throws {Error} マイクアクセスが拒否された場合
   */
  async startMic() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = this.audioCtx.createMediaStreamSource(this.stream);

      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.8;
      source.connect(this.analyser);

      const bufLen = this.analyser.frequencyBinCount;
      this.waveformData = new Uint8Array(bufLen);
      this.frequencyData = new Uint8Array(bufLen);
      this.isActive = true;
    } catch (err) {
      console.error('マイクアクセスエラー:', err);
      this.isActive = false;
      throw err;
    }
  }

  /** マイク入力を停止し解析を無効化 */
  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      this.audioCtx.close().catch(() => {});
      this.audioCtx = null;
    }
    this.analyser = null;
    this.isActive = false;
    this.volume = 0;
    this.bass = 0;
    this.mid = 0;
    this.treble = 0;
  }

  /** 毎フレーム呼び出し: 周波数・音量データを更新 */
  update() {
    if (!this.isActive || !this.analyser) return;

    this.analyser.getByteFrequencyData(this.frequencyData);
    this.analyser.getByteTimeDomainData(this.waveformData);

    const len = this.frequencyData.length;
    const third = Math.floor(len / 3);

    let total = 0, bassSum = 0, midSum = 0, trebleSum = 0;

    for (let i = 0; i < len; i++) {
      const v = this.frequencyData[i] / 255;
      total += v;
      if (i < third) bassSum += v;
      else if (i < third * 2) midSum += v;
      else trebleSum += v;
    }

    // スムージング付き更新
    const smooth = 0.3;
    this.volume  = this.volume  * (1 - smooth) + (total / len) * smooth;
    this.bass    = this.bass    * (1 - smooth) + (bassSum / third) * smooth;
    this.mid     = this.mid     * (1 - smooth) + (midSum / third) * smooth;
    this.treble  = this.treble  * (1 - smooth) + (trebleSum / (len - third * 2)) * smooth;
  }

  /**
   * 現在の解析結果を返す
   * @returns {{volume:number, bass:number, mid:number, treble:number, isActive:boolean, frequencyData:Uint8Array|null, waveformData:Uint8Array|null}}
   */
  getAudioData() {
    return {
      volume: this.volume,
      bass: this.bass,
      mid: this.mid,
      treble: this.treble,
      isActive: this.isActive,
      frequencyData: this.frequencyData,
      waveformData: this.waveformData,
    };
  }
}
