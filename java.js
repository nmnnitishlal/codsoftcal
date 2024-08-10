let input=document.getElementById("input");
        function display(num){
            input.value+=num       
        }
        function del(){
            input.value=input.value.slice(0,-1)
        }
        function ans(){
            try{
                input.value=eval(input.value)
                
            }
            catch(err){
                alert("Invalid")
                input.value=""
            }
            
        }
        function clears(){
            input.value=""
        }