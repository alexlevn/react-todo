var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

var moment = require('moment');


describe('Reducer', () => {

    describe('searchTextReducer', () => {

        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            var res = reducers.searchTextReducer('', df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            
            var res = reducers.showCompleteReducer(false, df(action));

            expect(res).toEqual(true);
        });


    });

    describe('todoReducer', ()=>{
        it('should add new todo', ()=>{
            var action = {
                type: 'ADD_TODO',
                text: 'walk the dog'
            };

            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        // defined todos array with realitic todo item
        // generate 

        it('should toggle todo', ()=>{
            var todos = [{
                id: '123',
                text: 'somthing', 
                completed: true,
                createdAt: 123,
                completedAt: 125
            }]

            var action = {
                type: 'TOGGLE_TODO',
                id: '123'
            }

            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);

        });

        // Alex Test
        it('should turn todos.completed from false to true and reverse, when is false, completedAt should be undefined',()=>{
            var action = {
                type: 'TOGGLE_TODO',
                id: 11
            }
            var todos =[{
                id: 11,
                text: 'Something todo',
                createdAt: moment().unix(),
                completed: false,
                completedAt: undefined,
            }]
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(true);
        });


    })

});