window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

          function hideTabContent() {
              tabsContent.forEach(item => {
                  item.style.display = 'none';
              });

              tabs.forEach(item => {
                  item.classList.remove('tabheader__item_active');
              });
          }

          function showTabContent(i = 0) {
              tabsContent[i].style.display = 'block';
              tabs.classList.add('tabheader__item_active');
          }

          hideTabContent();
          showTabContent();
});