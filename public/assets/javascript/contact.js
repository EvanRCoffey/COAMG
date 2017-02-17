$('.contactSubmitBtn').on('click', function(event) {
    event.preventDefault();
    console.log(event);

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    //Create new email object.
    var newEmail = {
        message: message,
        email: email,
        name: name
    };
    console.log(newEmail);

    //
    //
    //
    //
    //
    //
    //
    //POST here.  newEmail contains the correct info but the POST just ain't working.  Data always contains html for home page.
    $.post("/newEmail", newEmail).then(function(data) {
        console.log(data);
    });
});