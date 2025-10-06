
document.querySelectorAll('.fullscreen-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const container = btn.parentElement;

    // Create Exit Full Screen button if not already present
    let exitBtn = container.querySelector('.exit-fullscreen-btn');
    if (!exitBtn) {
      exitBtn = document.createElement('button');
      exitBtn.textContent = 'Exit Full Screen';
      exitBtn.className = 'exit-fullscreen-btn';
      exitBtn.style.position = 'absolute';
      exitBtn.style.top = '50px';
      exitBtn.style.right = '10px';
      exitBtn.style.zIndex = '10';
      exitBtn.style.padding = '0.4rem 1rem';
      exitBtn.style.background = '#ff0055';
      exitBtn.style.color = '#fff';
      exitBtn.style.border = 'none';
      exitBtn.style.borderRadius = '5px';
      exitBtn.style.cursor = 'pointer';
      exitBtn.style.opacity = '0.9';
      exitBtn.style.display = 'none';
      container.appendChild(exitBtn);

      exitBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent bubbling
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      });
    }

    // Request full screen
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) { // Safari
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) { // IE11
      container.msRequestFullscreen();
    }

    // Show the exit button when in fullscreen
    function fullscreenChangeHandler() {
      if (
        document.fullscreenElement === container ||
        document.webkitFullscreenElement === container ||
        document.msFullscreenElement === container
      ) {
        exitBtn.style.display = 'block';
      } else {
        exitBtn.style.display = 'none';
      }
    }

    document.addEventListener('fullscreenchange', fullscreenChangeHandler);
    document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);
    document.addEventListener('msfullscreenchange', fullscreenChangeHandler);
  });
});