
let imageName = 'image';

function readFile(input) {
  if (input.files && input.files[0] && input.files[0].name) {
    imageName = input.files[0].name;
    let imageLower = imageName.toLowerCase();
    if (imageLower.endsWith('.png') ||
      imageLower.endsWith('.jpg') ||
      imageLower.endsWith('.jpeg')) {
      let reader = new FileReader();

      reader.onload = function (e) {

        let isPng = false;
        if (imageLower.endsWith('.png')) {
          isPng = true;
          let button = $('.downloadJpg');
          button.removeClass('hidden');
        } else {
          let button = $('.downloadPng');

          button.removeClass('hidden');
        }
        const img = new Image();
        img.onload = function () {

          let canvas = document.getElementById("convertCanvas");
          let ctx = canvas.getContext("2d");
          canvas.width = this.width;
          canvas.height = this.height;
          if (isPng) {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          ctx.drawImage(img, 0, 0);
        }
        img.src = e.target.result

        let htmlPreview =
          '<img class="image" src="' + e.target.result + '" />' +
          '<p>' + input.files[0].name + '</p>';
        let wrapperZone = $(input).parent();
        let previewZone = $('.preview-zone');
        let boxZone = $('.preview-zone').find('.box').find('.box-body');

        wrapperZone.removeClass('dragover');
        previewZone.removeClass('hidden');
        boxZone.empty();
        boxZone.append(htmlPreview);
        // drawImage();
      };

      reader.readAsDataURL(input.files[0]);
    }

  }
}


function triggerDownload(imgURI, name) {
  let a = document.createElement('a');
  a.setAttribute('download', name);
  a.setAttribute('href', imgURI);
  a.setAttribute('target', '_blank');
  // a.dispatchEvent(evt);
  a.click();
  a.remove();
}


$(".dropzone").change(function () {
  readFile(this);
});

$('.dropzone-wrapper').on('dragover', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass('dragover');
});

$('.dropzone-wrapper').on('dragleave', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).removeClass('dragover');
});

$('.remove-preview').on('click', function () {
  let boxZone = $(this).parents('.preview-zone').find('.box-body');
  let previewZone = $(this).parents('.preview-zone');
  let dropzone = $(this).parents('.form-group').find('.dropzone');
  boxZone.empty();
  previewZone.addClass('hidden');

  let jpgButton = $('.downloadJpg');
  jpgButton.addClass('hidden');

  let pngButton = $('.downloadPng');
  pngButton.addClass('hidden');
  $('#imageForm').trigger('reset');
});

$('.downloadPng').on('click', function () {
  let canvas = document.getElementById('convertCanvas');
  let imgURI = canvas
    .toDataURL('image/png');
  triggerDownload(imgURI, imageName) + '.png';
});

$('.downloadJpg').on('click', function () {
  let canvas = document.getElementById('convertCanvas');

  let imgURI = canvas
    .toDataURL('image/jpeg', 0.8);
  triggerDownload(imgURI, imageName + '.jpg');
});