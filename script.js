const toggle = document.querySelector('#themeToggle');
const savedTheme = localStorage.getItem('nova-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');
function syncButton(){const dark=document.body.classList.contains('dark');toggle.textContent=dark?'☀':'☾';toggle.setAttribute('aria-pressed',String(dark));toggle.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');}
syncButton();
toggle.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('nova-theme',document.body.classList.contains('dark')?'dark':'light');syncButton();});