var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var expect = require('expect');
var $ = require('jquery');

var TodoSearch  = require('TodoSearch');

describe('TodoSearch', ()=>{
    
    it('should exists', ()=>{
        expect(TodoSearch).toExist();
    });

    it('should be call onSearch with entered input text', ()=>{
        var searchText = "Dog";
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Dog');
    })

    it('should be call onSearch with proper check value', ()=>{
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked=true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true,'');

    });
}); 