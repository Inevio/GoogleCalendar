var win = $(this);
var window = win.parents().slice( -1 )[ 0 ].parentNode.defaultView;
var document = window.document;

api.integration.gcalendar.listAccounts(function( err, accounts ){
  if(accounts != null && accounts.length > 0)
  {
    api.app.removeView( win );  
    api.app.createView( accounts[0],'home2');
  }
});

win.on( 'click', '.loginButton', function(e){
  api.integration.gcalendar.addAccount(function( err, accountObject ){
    // api.app.removeView( win );  
    // api.app.createView( accountObject,'home2');
  });
});

api.integration.gcalendar.on('added-account', function( account ){
  api.integration.gcalendar.listAccounts(function( err, accounts ){
    accounts.forEach(function(accountObject) {
      if(accountObject.id == account.id)
      {
        api.app.removeView( win );  
        api.app.createView( accountObject,'home2');
      }
    });
  });
});
