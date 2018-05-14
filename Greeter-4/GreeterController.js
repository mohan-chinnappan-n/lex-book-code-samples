// Component Controller
//  it can have handlers
//
//  Controller can make use of functions in the Helper
//
//  Helper contains reusable methods the Controller can make use of
//

({

    // init ===================

    //--- datatable
    cmpInit: function (cmp, event, helper) {

        // for combobox
        var options = [
            { value: "new", label: "New" },
            { value: "in-progress", label: "In Progress" },
            { value: "finished", label: "Finished" }
        ];
        cmp.set("v.cbstatusOptions", options);


        cmp.set('v.mycolumns', [
            {label: 'Opportunity name', fieldName: 'opportunityName', type: 'text'},
            {label: 'Confidence', fieldName: 'confidence', type: 'percent', cellAttributes:
             { iconName: { fieldName: 'trendIcon' }, iconPosition: 'right' }},
            {label: 'Amount', fieldName: 'amount', type: 'currency', typeAttributes: { currencyCode: 'USD'}},
            {label: 'Contact Email', fieldName: 'contact', type: 'email'},
            {label: 'Contact Phone', fieldName: 'phone', type: 'phone'}
        ]);
        cmp.set('v.mydata', [{
            id: 'a',
            opportunityName: 'Farm Equipment',
            confidence: 0.2,
            amount: 25000,
            contact: 'nammalvar@coolfarmers.org',
            phone: '2352235235',
            trendIcon: 'utility:down'
        },
                             {
                                 id: 'b',
                                 opportunityName: 'Electrical Devices',
                                 confidence: 0.78,
                                 amount: 740000,
                                 contact: 'edison@coolelectricians.org',
                                 phone: '2352235235',
                                 trendIcon: 'utility:up'
                             }]);
    },

    //----- end init ===============


    // onclick handler for the button
    // brings in 'component' and 'helper'
    changeGreeting : function(component, event, helper) {
        // set this component variable (v.greeting) to the 'newGreeting'
        //  with the help of the helper function : updateGreeting(component)
        helper.updateGreeting(component);

    },
    //onselect handler for the buttonMenu
    handleLangMenuSelect: function(component, event, helper) {
        helper.updateGreetingGivenLang(component, event);

    },

    // handles the buttonIconStateful on select event
    handleLikedToggle : function (component, event) {
        var liked = component.get("v.liked");
        component.set("v.liked", !liked);
        var currentNumClicks = component.get("v.numClicks");
        currentNumClicks++;
        component.set("v.numClicks", currentNumClicks)


    },


    // handles the buttonGroup button onclick event
    showLove: function(component, event) {
        // event.getSource().getLocalId() returns the aura:id of the clicked button.
        // event.getSource().get("v.name") returns the name of the clicked button
        // https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_cb_which_button_pressed.htm
        var item = event.getSource().getLocalId();
        var type = '.png';
        if (item === 'baby-donkey-1') type = '.gif';
        var imgSrcBase = "https://raw.githubusercontent.com/mohan-chinnappan-n/lex-book-code-samples/master/Greeter-2/img/l-";
        var imgSrc = imgSrcBase + item + type;
        component.set("v.imgsrc",imgSrc);


    },

    // handle CheckBoxGroupChange
    handleCheckBoxGroupChange: function(component, event, helper) {
        var item = event.getSource().getLocalId();
        console.log(item);
        var changeValue = event.getParam("value");
        alert(changeValue);

    },


    getSelectedName: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        // Display that fieldName of the selected rows
        for (var i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].opportunityName);
        }
    },

    // handleDynaicIcon
    handleDynaicIcon : function( cmp, event, helper) {
        var item = event.getSource().getLocalId();
        alert (item + " got clicked!")


    },

    // Combobox

    loadCBOptions: function (component, event, helper) {
        var options = [
            { value: "new", label: "New" },
            { value: "in-progress", label: "In Progress" },
            { value: "finished", label: "Finished" }
        ];
        component.set("v.cbstatusOptions", options);
    },
    handleCBOptionSelected: function (cmp, event) {
        // Get the string of the "value" attribute on the selected option
        var selectedOptionValue = event.getParam("value");
        alert("Option selected with value: '" + selectedOptionValue + "'");
    },





})
