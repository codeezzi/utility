$(function () {

  localforage.iterate(function (value, key, iterationNumber) {
    // Resulting key/value pair -- this callback
    // will be executed for every item in the
    // database.
    createSavedEntry(key, value);

  }).then(function () {

  }).catch(function (err) {
    // This code runs if there were any errors
    console.log(err);
  });
});


let createSavedEntry = (timestamp, entry) => {
  let creationDate = new Date(parseFloat(timestamp));
  let creationDateString = creationDate.toLocaleString();
  let htmlEntry = `
<div class="col-md-6 col-lg-4 col-xl-3" id="${timestamp}-Card">
        <div class="card bg-light mb-3 mx-auto">
          <div class="card-header">
            <i class="fa fa-sticky-note-o"></i>
            ${creationDateString}
          </div>
          <div class="card-body">
            <div class="form-group">
              <input class="form-control" id="${timestamp}-Title" aria-describedby="noteTitle" 
                placeholder="Title" value="${entry.title}">
              <textarea class="form-control"  id="${timestamp}-Body" rows="6">${entry.body}</textarea>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary updateNote" id="${timestamp}">Update</button>
            <button class="btn btn-danger updateNote" id="${timestamp}-Delete">Delete</button>
          </div>
        </div>
      </div>

`
  $("#entryRow").append(htmlEntry);
  $('#' + timestamp).on('click', function (e) {
    let id = e.target.id;
    updateEntry(id);
  });
  $('#' + timestamp + '-Delete').on('click', function (e) {
    let id = e.target.id.replace('-Delete', '');
    removeEntry(id);

  });
}

let removeEntry = (id) => {

  localforage.removeItem(id)
    .then(() => {
      // Do other things once the value has been saved.
      let entryCard = $('#' + id + '-Card');
      entryCard.remove();
    }).catch((err) => {
      // This code runs if there were any errors
      console.log(err);
    });
}


let updateEntry = (id) => {
  let noteBody = $('#' + id + '-Body');
  let noteTitle = $('#' + id + '-Title');

  let note = {
    title: noteTitle.val(),
    body: noteBody.val()
  }
  saveEntry(id, note);
}

let saveEntry = (id, entry) => {

  localforage.setItem(id, entry)
    .then((value) => {
      // Do other things once the value has been saved.
      createSavedEntry(id, entry);
    }).catch((err) => {
      // This code runs if there were any errors
      console.log(err);
    });

}

$('.saveNote').on('click', function () {
  let noteBody = $('#notesTextArea');
  let noteTitle = $('#noteTitle');
  let timestamp = new Date().getTime().toString();
  let note = {
    title: noteTitle.val(),
    body: noteBody.val()
  }
  noteBody.val('');
  noteTitle.val('');
  saveEntry(timestamp, note);
});


