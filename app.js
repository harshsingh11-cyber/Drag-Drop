document.addEventListener('DOMContentLoaded', function() {
    const draggableItems = document.querySelectorAll('.draggable');
    const dropContainer = document.querySelector('.drop-container');
  
    // Add event listeners for drag events
    draggableItems.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });
  
    // Add event listeners for drop events
    dropContainer.addEventListener('dragover', dragOver);
    dropContainer.addEventListener('dragenter', dragEnter);
    dropContainer.addEventListener('dragleave', dragLeave);
    dropContainer.addEventListener('drop', drop);
  
    let draggedItem = null;
  
    function dragStart(e) {
      draggedItem = this;
      setTimeout(() => (this.style.opacity = '0.5'), 0);
    }
  
    function dragEnd() {
      setTimeout(() => (this.style.opacity = '1'), 0);
      draggedItem = null;
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function dragEnter(e) {
      e.preventDefault();
      this.classList.add('drag-over');
    }
  
    function dragLeave() {
      this.classList.remove('drag-over');
    }
  
    function drop() {
      this.classList.remove('drag-over');
      this.appendChild(draggedItem);
      // Display success message or update UI
      console.log('Item dropped!');
    }
  });
  