<script> 
        function name(){
        let username=document.getElementById('username').value;
        
        if(username.length<5){
            let namemsg=document.getElementById('namemsg')  
            namemsg.innerText="Name length should be greater than 5 charecters"
        } 
        } 

        function email(){ 
            let email=document.getElementById('email').value; 
            let email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ 
            if(email_pattern.test(email)){
                    document.getElementById('mailmsg').innerText="Valid Email";
                    
                } else{
                    document.getElementById('mailmsg').innerText="InValid Email";
                    
                } 

        } 

        function password(){ 
            let password=document.getElementById('password').value; 
            let password_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
            if(password_pattern.test(password)){
                    document.getElementById('passwordmsg').innerText="Valid Password";
                    
                } else{
                    document.getElementById('passwordmsg').innerText="InValid Password";
                    
                } 

        }
        
       
        function matchpassword(){ 
        let mainpassword=document.getElementById('password').value;  
        let confirmPassword=document.getElementById('confirmpassword').value;  
        let passwordmsg=document.getElementById('confirmpasswordmsg')
        if(confirmPassword===mainpassword){
            passwordmsg.textContent="password matched"
        }

        }
        

        

    </script>