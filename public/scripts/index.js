'use strict';

document.addEventListener('DOMContentLoaded', (e) => {

  let windowScrollTop;
  const nav = document.getElementsByTagName('nav')[0];
  window.addEventListener('scroll', (e) => {  
    windowScrollTop = document.documentElement.scrollTop;
    if (windowScrollTop > nav.offsetHeight) {
      nav.classList.add('navScrolled');
    } else {
      nav.classList.remove('navScrolled');
    }
  });

  const [firstStep, secondStep, thirdStep, forthStep] = document.querySelectorAll('#demo-steps>img:nth-last-of-type(odd)');
  const [secondDe, thirdDe, forthDe] = document.querySelectorAll('#demo-description>li');
  const [firstLine, secondLine, thirdLine] = document.querySelectorAll('#demo-steps>img:nth-last-of-type(even)');
  const cursor = document.querySelector('#demo-cursor');
  const signupScreen = document.querySelector('#signup-screen');
  const searchScreen = document.querySelector('#search-screen');
  const confirmScreen = document.querySelector('#confirm-screen');

  firstStep.addEventListener('click', (e) => {
    [secondStep, thirdStep, forthStep].forEach(step => {
      step.style.opacity = '.5';
    });
    [firstLine, secondLine, thirdLine].forEach(line => {
      line.style.opacity = '.5';
    })
    [secondDe, thirdDe, forthDe].forEach(de => {
      de.style.opacity = '.2';
    });
    [signupScreen, searchScreen, confirmScreen].forEach(screen => {
      screen.style.opacity = '0';
    });
    cursor.style.opacity = '0';
    cursor.style.bottom = '0';
    cursor.style.left = '0';
  });
  secondStep.addEventListener('click', (e) => {
    secondStep.style.opacity = '1';
    [thirdStep, forthStep].forEach(step => {
      step.style.opacity = '.5';
    });
    firstLine.style.opacity = '1';
    [secondLine, thirdLine].forEach(line => {
      line.style.opacity = '.5';
    });
    secondDe.style.opacity = '1';
    [thirdDe, forthDe].forEach(de => {
      de.style.opacity = '.2';
    });
    [searchScreen, confirmScreen].forEach(screen => {
      screen.style.opacity = '0';
    });
    signupScreen.style.opacity = '1';
    cursor.style.opacity = '1';
    cursor.style.bottom = '30%';
    cursor.style.left = '50%';
  });
  thirdStep.addEventListener('click', (e) => {
    forthStep.style.opacity = '.5';
    [secondStep, thirdStep].forEach(step => {
      step.style.opacity = '1';
    });
    [firstLine, secondLine].forEach(line => {
      line.style.opacity = '1';
    });
    thirdLine.style.opacity = '.5';

    [secondDe, thirdDe].forEach(de => {
      de.style.opacity = '1';
    });
    forthDe.style.opacity = '.2';

    confirmScreen.style.opacity= '0';
    searchScreen.style.opacity = '1';
    cursor.style.opacity = '1';
    cursor.style.bottom = '58%';
    cursor.style.left = '30%';
  });
  forthStep.addEventListener('click', (e) => {
    [secondStep, thirdStep, forthStep].forEach(step => {
      step.style.opacity = '1';
    });
    [firstLine, secondLine, thirdLine].forEach(line => {
      line.style.opacity = '1';
    });
    [secondDe, thirdDe, forthDe].forEach(de => {
      de.style.opacity = '1';
    });
    confirmScreen.style.opacity = '1';
    cursor.style.opacity = '1';
    cursor.style.bottom = '28%';
    cursor.style.left = '50%';
  });

});
