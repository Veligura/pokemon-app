import template from './app.html';


let appComponent = {
    template,
    restrict: 'E',
    controller: function(){
        console.log("Hi there")
    }
};

export default rootComponent;