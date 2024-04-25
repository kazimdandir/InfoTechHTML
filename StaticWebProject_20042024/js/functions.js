function showContent(contentId) {
    // Hide all content divs
    document.querySelectorAll('.content-div').forEach(div => {
        div.style.display = 'none';
    });
    
    // Show selected content div
    document.getElementById(contentId).style.display = 'block';
}

function submitForm() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your message has been sent successfully.",
      showConfirmButton: false,
      timer: 1500
    });
  }