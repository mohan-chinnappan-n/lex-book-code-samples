// Helper
// Helper provides reusable functions to the Controller

//  -------------------Benefits of the helper----------------------
/* Since Helper is shared across everything,
 *  it allows us to share and keep logic across of Controllers and Renderers in one place
 * 
 * It also helps us keep logic within Controllers and Renderers lean.
*/
//  ----------------------------------------------------------------


({
    updateGreeting : function(component) {
        // get a randomized greeting message
        var newGreetings= ["Bonjour!", "வணக்கம் ", " Buenos días", "Buon giorno!", " السلام علیکم", "ನಮಸ್ಕಾರ", "నమస్కారం " ];
        var rand = Math.floor((Math.random() * 6 ) );
        component.set("v.greeting", newGreetings[rand]);

    }
})
