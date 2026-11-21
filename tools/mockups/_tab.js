(() => {
  const tab = new URLSearchParams(location.search).get('tab');
  if (!tab) return 'no-tab';
  const button = document.querySelector(`[data-tab="${tab}"]`);
  if (button) button.click();
  return tab;
})()
