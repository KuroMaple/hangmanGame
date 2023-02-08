function loadClicked(){
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomword',
    headers: { 'X-Api-Key': 'I7q3UnuBG6F8i5PX4pH33Q==gVpnAOMk17m115Uu'},
    contentType: 'application/json',
    success: function(result) {
      generateInterface(result.word);
      //parseResult(result);
      
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
} 

function generateInterface(word){
  console.log(word);
}





