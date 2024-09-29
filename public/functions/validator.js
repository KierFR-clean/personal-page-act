$(document).ready(function() {
    $('#email').on('input', function() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test($(this).val())) {
        $('#emailFeedback').text(''); 
      } else {
        $('#emailFeedback').text('Please enter a valid email address.');
      }
    });

    function emailValidator() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const email = $('#email').val().trim();
      return emailRegex.test(email);
    }


    function valCntForm(event) {
        event.preventDefault();
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

       
      if (name === '' || email === '' || message === '') {
          swal({
            title: "Error!",
            text: "Please fill all fields!",
            icon: "error",
            button: "OK",
        });
            return;
        } else if (!emailValidator()) {
          swal({
          title: "Error!",
          text: "Please enter a valid email!",
          icon: "error",
          button: "OK",
        });
          return;

      }

        swal({
            title: "Success!",
            text: "Message submitted successfully!",
            icon: "success",
            button: "OK",
        }).then((value) => {
           
            $('#contact-form')[0].reset();
        });
    }

    $('#contact-form').on('submit', valCntForm);
  });


  