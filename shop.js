document.getElementById('loadMoreBtn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.item.hidden');
    const itemsToShow = 4; // Number of items to show on each click

    for (let i = 0; i < itemsToShow && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
    }

    // Hide the button if there are no more items to show
    if (hiddenItems.length <= itemsToShow) {
        this.style.display = 'none';
    }
});
