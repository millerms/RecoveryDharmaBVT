document.addEventListener('DOMContentLoaded', () => {
  // Enhance reference items rendered via Liquid include
  const refItems = Array.from(document.querySelectorAll('.refs .ref-item[data-pmid]'));
  if (refItems.length) {
    const ids = refItems.map(li => li.getAttribute('data-pmid')).join(',');
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids}&retmode=json`;
    fetch(url).then(r => r.json()).then(data => {
      const res = data.result || {};
      refItems.forEach(li => {
        const pmid = li.getAttribute('data-pmid');
        const sum = res[pmid];
        if (!sum) return;
        const main = li.querySelector('.ref-main');
        if (!main) return;
        const title = sum.title;
        const journal = sum.fulljournalname || sum.source;
        const year = (sum.pubdate || '').split(' ')[0];
        const authors = (sum.authors || []).slice(0, 6).map(a => a.name).join(', ');
        // Try to link title to DOI; fall back to PubMed
        let doi = '';
        if (Array.isArray(sum.articleids)) {
          const doiObj = sum.articleids.find(a => a.idtype === 'doi');
          if (doiObj && doiObj.value) doi = doiObj.value;
        }
        const href = doi ? `https://doi.org/${doi}` : `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
        main.innerHTML = `
          <span class="ref-title"><a class="ref-link" href="${href}" target="_blank" rel="noopener">${title}</a></span>
          <span class="ref-line"><span class="ref-authors">${authors}</span><span class="ref-sep"> · </span><span class="ref-journal">${journal}</span><span class="ref-sep"> · </span><span class="ref-year">${year}</span></span>
          <div class="ref-actions">
            <a class="ref-badge ref-badge--pmid ref-link" href="https://pubmed.ncbi.nlm.nih.gov/${pmid}/" target="_blank" rel="noopener">PMID ${pmid}</a>
          </div>`;
      });
    }).catch(() => {/* fail silently */});
  }
});
