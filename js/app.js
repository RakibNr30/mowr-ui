/* globals Chart:false, feather:false */
(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  const requiredElements = document.querySelectorAll('[required]');

  requiredElements.forEach(function (requiredElement) {
    const label = document.querySelector('label[for="' + requiredElement.id + '"]');
    label.innerHTML += '<span style="color: red;"> *</span>';
  });
})()
