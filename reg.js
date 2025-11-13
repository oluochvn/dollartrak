document.querySelector('.forminput').addEventListener('submit',async (e)=>{
    e.preventDefault();

    const username = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    try{
        const res = await fetch('http://localhost:3000/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username,email,password})
        })

        const text = await res.text();
        if(res.ok){
            alert(' '+ text);
            e.target.reset();
        }else{
            alert(''+ text)
        }
    }
    catch(err){
        alert('unable to connect to the server')
        console.error(err)
    }

})