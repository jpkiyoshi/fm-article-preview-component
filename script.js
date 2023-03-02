const shareBtnMobile = document.querySelector('.share-button-mobile');
const shareBtnMobileActive = document.querySelector('.share-button-mobile.active');
const shareBtnDesktop = document.querySelector('.share-button-desktop');
const shareBtnDesktopActive = document.querySelector('.share-button-desktop.active');
const linksWrapper = document.querySelector('.share-links-wrapper');
const linksWrapperDesktop = document.querySelector('.share-links-wrapper-desktop');

shareBtnMobile.addEventListener('click', () => {
	linksWrapper.style.transform = 'translateY(0)';
});

shareBtnMobileActive.addEventListener('click', () => {
	linksWrapper.style.transform = 'translateY(100%)';
});

shareBtnDesktop.addEventListener('click', () => {
	linksWrapperDesktop.classList.remove('hide');
	linksWrapperDesktop.classList.add('show');
	linksWrapperDesktop.style.display = 'flex';
	shareBtnDesktopActive.style.display = 'grid';
});

shareBtnDesktopActive.addEventListener('click', () => {
	linksWrapperDesktop.classList.remove('add');
	linksWrapperDesktop.classList.add('hide');
	shareBtnDesktopActive.style.display = 'none';

	setTimeout(() => {
		linksWrapperDesktop.style.display = 'none';
	}, 300);
});
