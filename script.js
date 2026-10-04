const copyButton = document.querySelector('#copy-discord');
const copyLabel = document.querySelector('#copy-label');
const toast = document.querySelector('#toast');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

copyButton?.addEventListener('click', async () => {
  const value = copyButton.dataset.copy || 'oussaminho_x7';
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const helper = document.createElement('textarea');
    helper.value = value;
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    helper.remove();
  }
  copyLabel.innerHTML = 'Copied <span>✓</span>';
  toast?.classList.add('show');
  window.setTimeout(() => {
    copyLabel.innerHTML = 'Copy <span>⧉</span>';
    toast?.classList.remove('show');
  }, 2200);
});
