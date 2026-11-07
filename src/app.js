const menu = document.querySelector('#menu-toggle');
menu?.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open));
 menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
 document.querySelector('#main-nav').classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
 if(event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { menu.click(); menu.focus(); }
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active',item === button); item.setAttribute('aria-pressed',String(item === button)); });
 document.querySelectorAll('[data-category]').forEach(item => { item.hidden = button.dataset.filter !== 'all' && button.dataset.filter !== item.dataset.category; });
}));
document.querySelector('#share-campaign')?.addEventListener('click', async () => {
 const url = 'https://givebutter.com/untitled-campaign-55scnw';
 const status = document.querySelector('#share-status');
 try { await navigator.clipboard.writeText(url); status.textContent = 'Campaign link copied. Thank you for sharing the ripple.'; }
 catch { status.textContent = `Copy this campaign link: ${url}`; }
});
