Some notes reserved for a newbie

-   Spead syntax in Javascript: playground/spread.js

-   names = ['Mike','White'];
    ['Andrew', ...names].forEach((name)=> console.log(`Hi ${name}`));

-   npm install node-uuid --save-dev: Libary is for generate new ID: id = uuid();

-   Save local store.
    localStorage.getItem('nextId');
    localStorage.removeItem('searchText');

-   filteredTodos.sort((a,b) =>{
        if(!a.completed && b.completed){
            return -1;
        }else if(a.completed && !b.completed){
            return 1;
        }else{
            return 0;
        }
    });

    return -1; mean a will before b  ( a < b)
    return 1; mean b will before a ( b < a)
    return 0; no change.

- npm install moment
    momentjs.com // 