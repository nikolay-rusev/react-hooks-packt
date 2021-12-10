Use advanced hooks:
Reducer & Effect hooks

action definition:

1. user actions:
{
    type:'LOGIN', username: 'Username', password: 'Password'
}

{
    type:'REGISTER', username: 'Username', password: 'Password', passwordRepeat: 'Password'
}

{
    type:'LOGOUT'
}

2. post actions:

{
    type:'CREATE_POST', title:'some title', content:'some content', author: 'Daniel Bugl'
}