// Component Controller 
//  it can have handlers
//  
//  Controller can make use of functions in the Helper
//  
//  Helper contains reusable methods the Controller can make use of
//  

({


    // onclick handler for the button
    // brings in 'component' and 'helper'
    changeGreeting : function(component,event,helper) {
        // set this component variable (v.greeting) to the 'newGreeting'  
        //  with the help of the helper function : updateGreeting(component)    
        helper.updateGreeting(component);

    }

})
