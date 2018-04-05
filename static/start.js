
var win = $(this);
api.integration.gcalendar.listAccounts(function( err, accounts ){
      if(accounts != null && accounts.length > 0)
      {
        //$(win).find('.ui-window').addClass('hiddenWindow');
        $(win).css('display','none');
      }
      start();
  });