const colorPalettes = [
  { primary: "#FF8B8B", secondary: "#9C2525" },
  { primary: "#F9F7E8", secondary: "#62BFAD" },
  { primary: "#61BFAD", secondary: "#FFFFFF" },
  { primary: "#E54B4B", secondary: "#FFFFFF" },
  { primary: "#167C80", secondary: "#FFFFFF" },
  { primary: "#B7E3E4", secondary: "#F03F35" },
  { primary: "#EFE8D8", secondary: "#FF4552" },
  { primary: "#005397", secondary: "#FF8788" },
  { primary: "#32B67A", secondary: "#FFFFFF" },
  { primary: "#F3C9DD", secondary: "#72AEC5" },
  { primary: "#0BBCD6", secondary: "#E6625E" },
  { primary: "#BFB5D7", secondary: "#FFFFFF" },
  { primary: "#BEA1A5", secondary: "#000000" },
  { primary: "#F0CF61", secondary: "#EBE8E1" },
  { primary: "#0E38B1", secondary: "#FFFFFF" },
  { primary: "#A6CFE2", secondary: "#0B0C11" },
  { primary: "#371722", secondary: "#BBAB9B" },
  { primary: "#C7C6C4", secondary: "#008E8F" },
  { primary: "#283470", secondary: "#15A29C" },
  { primary: "#EF3E4A", secondary: "#FEDAC2" },
  { primary: "#C0C2CE", secondary: "#012F63" },
  { primary: "#EEC0DB", secondary: "#162BF4" },
  { primary: "#C5BEAA", secondary: "#28356A" },
  { primary: "#FDF06F", secondary: "#D31B33" },
  { primary: "#EDB5BD", secondary: "#000000" },
  { primary: "#17C37B", secondary: "#F4F4F4" },
  { primary: "#1B1D1C", secondary: "#EA1821" },
  { primary: "#E88565", secondary: "#181A27" },
  { primary: "#FFEFE5", secondary: "#1FC8A9" },
  { primary: "#F4C7EE", secondary: "#008FD3" },
  { primary: "#77EEDF", secondary: "#28292B" },
  { primary: "#E57066", secondary: "#28292B" },
  { primary: "#EED974", secondary: "#28292B" },
  { primary: "#FBFE56", secondary: "#0B64C0" },
  { primary: "#A7BBC3", secondary: "#FFFFFF" },
  { primary: "#3B465C", secondary: "#E9E8D4" },
  { primary: "#055A5B", secondary: "#E6E6E6" },
  { primary: "#9C9CDD", secondary: "#F9BDBD" },
  { primary: "#178E96", secondary: "#FFFFFF" },
  { primary: "#178E96", secondary: "#FDE3C8" },
  { primary: "#20AD65", secondary: "#FEC8BE" },
  { primary: "#112378", secondary: "#FBECCF" },
  { primary: "#E33946", secondary: "#FDEDB2" },
  { primary: "#FEDCCC", secondary: "#F87C4C" },
  { primary: "#FEDCCC", secondary: "#FFFFFF" },
  { primary: '#00B28B', secondary: '#FFFFFF' },
  { primary: '#00B28B', secondary: '#EDC3C7' },
  { primary: '#9357A9', secondary: '#FFFFFF' },
  { primary: '#9357A9', secondary: '#000000' },
  { primary: '#C6D7C7', secondary: '#FF5035' },
  { primary: '#12162D', secondary: '#8B743D' },
  { primary: '#776EA7', secondary: '#EBB9D4' },
  { primary: '#EF303B', secondary: '#481C19' },
  { primary: '#1812D6', secondary: '#FFFFFF' },
  { primary: '#FFFDE7', secondary: '#189BA3' },
  { primary: '#F1D3D3', secondary: '#1539CF' },
  { primary: '#7DE0E6', secondary: '#FF2A93' },
  { primary: '#3B755F', secondary: '#F2CB6C' },
  { primary: '#CE7182', secondary: '#FAEED4' },
  { primary: '#340B0B', secondary: '#9B8FFF' },
  { primary: '#F8EBEE', secondary: '#0C3934' },
  { primary: '#FF9966', secondary: '#8C5F31' },
  { primary: '#3333FF', secondary: '#CDFFCC' },
  { primary: '#75FFC0', secondary: '#7A30CF' },
  { primary: '#FB9B2A', secondary: '#0C00FF' },
  { primary: '#FF8FA4', secondary: '#E5E8DC' },
  { primary: '#000000', secondary: '#FF0000' },
  { primary: '#083EA7', secondary: '#1FDE91' },
  { primary: '#674B7C', secondary: '#E5E8DC' },
  { primary: '#19AAD1', secondary: '#FFCC4C' },
  { primary: '#B1FDEB', secondary: '#000000' },
  { primary: '#121738', secondary: '#D17C78' },
  { primary: '#0C485E', secondary: '#FEB904' },
  { primary: '#FFE6AD', secondary: '#FF4B24' },
  { primary: '#FFE6AD', secondary: '#9A008A' },
  { primary: '#022EAC', secondary: '#13E19B' },
  { primary: '#022EAC', secondary: '#FBA30C' },
  { primary: '#F94627', secondary: '#9A008A' },
  { primary: '#9AB79A', secondary: '#094436' },
  { primary: '#9AB79A', secondary: '#FDFF50' },
  { primary: '#424E22', secondary: '#FFAD67' },
  { primary: '#C73E99', secondary: '#F8DA1B' },
  { primary: '#5C457B', secondary: '#FFFFFF' },
  { primary: '#FF6090', secondary: '#81072C' },
  { primary: '#FF6090', secondary: '#FEEA0D' },
  { primary: '#0D4CBE', secondary: '#CFCEC7' },
  { primary: '#501718', secondary: '#FD750A' },
  { primary: '#E7E7E7', secondary: '#766C08' },
  { primary: '#8AA9C6', secondary: '#093929' },
  { primary: '#B3E0E0', secondary: '#000000' },
  { primary: '#B3E0E0', secondary: '#FFFFFF' },
  { primary: '#343B3F', secondary: '#FF89B5' },
  { primary: '#343B3F', secondary: '#D1BDFF' },
  { primary: '#CDB670', secondary: '#FFFFFF' },
  { primary: '#CDB670', secondary: '#000000' },
  { primary: '#F8DA1B', secondary: '#7B76A6' },
  { primary: '#F83439', secondary: '#321913' },
  { primary: '#EEE9DC', secondary: '#E2818A' },
  { primary: '#E2A9C9', secondary: '#FC411E' },
  { primary: '#0A005A', secondary: '#F0F0F0' },
  { primary: '#CDCDD0', secondary: '#F74A1F' },
  { primary: '#F7F7F7', secondary: '#26CB4D' },
  { primary: '#2D1C46', secondary: '#B6D5F4' },
  { primary: '#2D1C46', secondary: '#EC2326' },
  { primary: '#053161', secondary: '#FF6A34' },
  { primary: '#053161', secondary: '#BED9DA' },
  { primary: '#FDB90B', secondary: '#FB5408' },
  { primary: '#FDB90B', secondary: '#321913' },
  { primary: '#837663', secondary: '#FFD3C2' },
  { primary: '#B2B2B2', secondary: '#E9FF27' },
  { primary: '#91A8CF', secondary: '#3E4668' },
  { primary: '#F2F2F2', secondary: '#0B64FE' },
  { primary: '#F2DDBC', secondary: '#FF67B9' },
  { primary: '#F2DDBC', secondary: '#FAAD58' },
  { primary: '#FF8B8B', secondary: '#9C2525' },
  { primary: '#3B5998', secondary: '#49BFB3' },
  { primary: '#033F7D', secondary: '#00A273' },
  { primary: '#FF4f81', secondary: '#FFC168' },
  { primary: '#008374', secondary: '#333333' },
  { primary: '#444444', secondary: '#4DC47D' }
];

const container = document.getElementById('palettes-container');
const paletteSearch = document.getElementById('palette-search');
const clearSearchButton = document.getElementById('clear-search');
const toggleViewButton = document.getElementById('toggle-view');
const resultsCount = document.getElementById('results-count');
const paletteTotal = document.getElementById('palette-total');
const emptyState = document.getElementById('empty-state');
const copiedAlert = document.getElementById('copied-alert');

paletteTotal.textContent = colorPalettes.length;

function getReadableTextColor(hex) {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 160 ? '#0f172a' : '#ffffff';
}

function generatePaletteHTML(palette, index) {
  const cardTextColor = getReadableTextColor(palette.primary);

  return `
    <article class="palette" style="background:${palette.primary}; color:${cardTextColor};" data-primary="${palette.primary.toLowerCase()}" data-secondary="${palette.secondary.toLowerCase()}">
      <div class="palette-inner">
        <span class="palette-badge">Palette ${index + 1}</span>
        <div>
          <h2 class="palette-title">Primary + Secondary</h2>
        </div>

        <div class="swatches">
          <button class="swatch" type="button" data-hex="${palette.primary}" aria-label="Copy primary color ${palette.primary}">
            <span class="swatch-chip" style="background:${palette.primary};"></span>
            <span class="swatch-text">
              <span class="swatch-label">Primary</span>
              <span class="swatch-code">${palette.primary}</span>
            </span>
          </button>

          <button class="swatch" type="button" data-hex="${palette.secondary}" aria-label="Copy secondary color ${palette.secondary}">
            <span class="swatch-chip" style="background:${palette.secondary};"></span>
            <span class="swatch-text">
              <span class="swatch-label">Secondary</span>
              <span class="swatch-code">${palette.secondary}</span>
            </span>
          </button>
        </div>

        <div class="palette-actions">
          <span class="palette-index">#${String(index + 1).padStart(3, '0')}</span>
          <button class="palette-copy" type="button" data-hex-pair="${palette.primary} ${palette.secondary}" aria-label="Copy both colors ${palette.primary} and ${palette.secondary}">Copy pair</button>
        </div>
      </div>
    </article>
  `;
}

function renderPalettes() {
  const query = paletteSearch.value.trim().toLowerCase();
  const filtered = colorPalettes.filter((palette) => {
    if (!query) return true;
    return palette.primary.toLowerCase().includes(query) || palette.secondary.toLowerCase().includes(query);
  });

  container.innerHTML = filtered.map((palette, index) => generatePaletteHTML(palette, colorPalettes.indexOf(palette))).join('');
  resultsCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'palette' : 'palettes'}`;
  emptyState.hidden = filtered.length !== 0;
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const helper = document.createElement('textarea');
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    document.body.removeChild(helper);
  }
}

function showCopiedAlert(message) {
  copiedAlert.textContent = message;
  copiedAlert.hidden = false;
  window.clearTimeout(showCopiedAlert.timeoutId);
  showCopiedAlert.timeoutId = window.setTimeout(() => {
    copiedAlert.hidden = true;
  }, 2200);
}

paletteSearch.addEventListener('input', renderPalettes);

clearSearchButton.addEventListener('click', () => {
  paletteSearch.value = '';
  renderPalettes();
  paletteSearch.focus();
});

toggleViewButton.addEventListener('click', () => {
  const isCompact = document.body.classList.toggle('compact-view');
  toggleViewButton.setAttribute('aria-pressed', String(isCompact));
  toggleViewButton.textContent = isCompact ? 'Expanded view' : 'Compact view';
});

container.addEventListener('click', async (event) => {
  const swatch = event.target.closest('.swatch');
  const pairButton = event.target.closest('.palette-copy');

  if (swatch) {
    const hex = swatch.dataset.hex;
    await copyToClipboard(hex);
    showCopiedAlert(`Copied ${hex}`);
    return;
  }

  if (pairButton) {
    const pair = pairButton.dataset.hexPair;
    await copyToClipboard(pair);
    showCopiedAlert(`Copied pair ${pair}`);
  }
});

renderPalettes();
