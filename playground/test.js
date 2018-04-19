var reduxState = {
    searchText: 'Dog',
    showCompleted: false,
    todos: [{
        id: '123',
        text: 'Walk the dog'
    }]
};

var action = {
    type: 'CHANGE_SEARCH TEXT',
    searchText = 'something else'
}