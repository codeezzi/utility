
let imageName = 'image';
let svgData = undefined;
let data = undefined;
imageWidth = 0;
imageHeight = 0;

function readFile(input) {
  if (input.files && input.files[0] && input.files[0].name) {
    imageName = input.files[0].name;
    let imageLower = imageName.toLowerCase();
    if (imageLower.endsWith('.png') ||
      imageLower.endsWith('.jpg') ||
      imageLower.endsWith('.jpeg')

    ) {
      let reader = new FileReader();

      reader.onload = function (e) {
        data = e.target.result
        console.log('data', data)
        let htmlPreview =
          '<img class="image" src="' + data + '" />' +
          '<p>' + input.files[0].name + '</p>';

        const img = new Image();
        img.onload = function () {
          imageWidth = this.width;
          imageHeight = this.height;
        }
        img.src = data;
        let wrapperZone = $(input).parent();
        let previewZone = $('.preview-zone');
        let boxZone = $('.preview-zone').find('.box').find('.box-body');
        let pdfTools = $('.pdfTools');
        pdfTools.removeClass('hidden');
        wrapperZone.removeClass('dragover');
        previewZone.removeClass('hidden');
        boxZone.empty();
        boxZone.append(htmlPreview);
        // drawImage();
      };

      reader.readAsDataURL(input.files[0]);
    } else if (imageLower.endsWith('.svg')) {
      let reader = new FileReader();
      reader.onload = function (e) {
        svgData = e.target.result;
        let htmlPreview = svgData;
        let wrapperZone = $(input).parent();
        let previewZone = $('.preview-zone');
        let boxZone = $('.preview-zone').find('.box').find('.box-body');
        let pdfTools = $('.pdfTools');
        pdfTools.removeClass('hidden');
        wrapperZone.removeClass('dragover');
        previewZone.removeClass('hidden');
        boxZone.empty();
        boxZone.append(htmlPreview);
      };
      reader.readAsText(input.files[0]);
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
  boxZone.empty();
  previewZone.addClass('hidden');

  let pdfTools = $('.pdfTools');
  pdfTools.addClass('hidden');
  $('#imageForm').trigger('reset');
});


$('.downloadPdf').on('click', function () {
  let orientation = $('#orientation');

  let imagesSize = [575.28, 821.89];
  if (orientation.val() == 'landscape') {
    imagesSize = [821.89, 575.28];
  }
  let pageWidth = imagesSize[0];
  let pageHeight = imagesSize[1];
  console.log('imagesSize', imagesSize);
  console.log('imageWidth', imageWidth);
  console.log('imageHeight', imageHeight);
  let content = undefined;
  if (data &&
    (pageWidth > imageWidth || pageHeight > imageHeight)) {
    imagesSize = [imageWidth, imageHeight];
    content = {
      image: data,
      fit: imagesSize
    }
  } else if (svgData) {
    content = {
      svg: svgData,
      fit: imagesSize
    }
  }
  const docDefinition = {
    pageSize: 'A4',
    pageOrientation: orientation.val(),
    pageMargins: [10, 10, 01, 10],
    content: [
      content,

    ],
  };
  pdfMake.createPdf(docDefinition).download(`demo.pdf`);
  console.log('download pdf', orientation.val());
});