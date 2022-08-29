function checkpswd(psl)
{
    var psw=/^[0-9A-Za-z]+$/;
    if(psl.value.match(psw))
    {
        alert('Your password have accepted : you can try another password');
        return true;
    }
    else
    {
        alert('Please input password only');
        return false;
    }
}