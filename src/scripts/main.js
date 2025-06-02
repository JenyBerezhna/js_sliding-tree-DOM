'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  tree.addEventListener('click', (eventy) => {
    const header = eventy.target.closest('span');

    if (header) {
      const parentBlock = header.parentElement;
      const children = parentBlock.querySelector('ul');

      if (children) {
        children.style.display =
          children.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
});
