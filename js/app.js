/* globals Chart:false, feather:false */
(function () {
  'use strict'

  feather.replace({'aria-hidden': 'true'})

  const requiredElements = document.querySelectorAll('[required]');

  requiredElements.forEach(function (requiredElement) {
    const label = document.querySelector('label[for="' + requiredElement.id + '"]');
    label.innerHTML += '<span style="color: red;"> *</span>';
  });
})()

/* Custom File Field */
$(document).ready(function () {
  $('.file-input-label').each(function () {
    let defaultText = $(this).data('default-text');
    let innerInput = $(this).find('input[type="file"]');
    $(this).empty().text(defaultText).append(innerInput);
  });

  $(document).on('change', '.file-input', function (e) {
    let fileName = (e.target.files.length > 0) ? e.target.files[0].name : $(this).parent('.file-input-label').data('default-text');
    let targetId = $(this).attr('id');
    let innerInput = $(this).parent('.file-input-label').find('input[type="file"]');
    $('.file-input-label[data-target="' + targetId + '"]').empty().text(fileName).append(innerInput);
  });
});

/* Menu Activeness */
$(document).ready(function () {
  if ($('.nav-inner .nav-item').hasClass('active')) {
    $('.nav-item.active').parent('.nav-inner').addClass('show');
    $('.nav-item.active').parent('.nav-inner').prev('.nav-link').removeClass('collapsed');
    $('.nav-item.active').parent('.nav-inner').prev('.nav-link').attr('aria-expanded', 'true');
  }
});
