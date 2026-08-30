/** Morph シークエンス用ステージラベル DOM */
export function createMorphStageLabel() {
  let labelEl = null;

  function ensure() {
    if (labelEl) return;
    labelEl = document.createElement('div');
    labelEl.id = 'morphStageLabel';
    labelEl.style.cssText = [
      'position:fixed',
      'left:50%',
      'bottom:92px',
      'transform:translateX(-50%)',
      'z-index:20',
      'pointer-events:none',
      'font-family:Outfit,Noto Sans JP,sans-serif',
      'font-size:13px',
      'letter-spacing:0.12em',
      'color:rgba(180,200,255,0.75)',
      'text-shadow:0 0 12px rgba(42,92,255,0.45)',
      'transition:opacity 0.4s',
      'text-align:center',
      'line-height:1.5',
    ].join(';');
    document.body.appendChild(labelEl);
  }

  return {
    set(text, hint = '') {
      ensure();
      labelEl.innerHTML = hint
        ? `${text}<br><span style="font-size:11px;opacity:0.55;letter-spacing:0.06em">${hint}</span>`
        : text;
    },
    destroy() {
      labelEl?.remove();
      labelEl = null;
    },
  };
}
