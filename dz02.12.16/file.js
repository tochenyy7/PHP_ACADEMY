
 
    function validateForm() {

    valid = true;
        if ( document.myform.email.value == "" )
        {
                alert ( "Пожалуйста, укажите Вашу почту в поле 'Email'." );
                document.getElementById('error2').style.border = "1px solid red"
                document.getElementById('error1').style.color="red";
               	valid = false;
        }

        if ( document.myform.lName.value == "" )
        {
                alert ( "Пожалуйста, введите Ваш телефон");
                document.getElementById('error4').style.color="red";
                valid = false;
        }





        if ( document.myform.fName.value == "" )
        {
                alert ( "Пожалуйста, укажите Ваше имя." );
                document.getElementById('error6').style.border = "1px solid red"
                document.getElementById('error5').style.color="red";
                valid = false;
        }

      

 		if ( document.myform.age.value == ""  )
        {       
                alert ( "Пожалуйста, укажите Ваш возраст." );
                document.getElementById('error8').style.border = "1px solid red"
                document.getElementById('error7').style.color="red";
                valid = false;
        }

        return valid;
}



		