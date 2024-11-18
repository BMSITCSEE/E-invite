
const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const viewButton = document.getElementById('viewButton');
const downloadButton = document.getElementById('downloadButton');


imageUpload.addEventListener('change', function () {
  const file = this.files[0]; // Get the uploaded file
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Set the preview image source
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block'; // Show the image preview

      // Show action buttons
      viewButton.style.display = 'inline-block';
      downloadButton.style.display = 'inline-block';

      // Set the download link
      downloadButton.href = e.target.result;
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  }
});

// Handle "View Image" button click
viewButton.addEventListener('click', function () {
    alert("You are viewing the uploaded image.");
  });
  
