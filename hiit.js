function title_keyup(evt) {
	var elem = evt.srcElement;
	document.getElementById("title").innerText = elem.innerText
}
$('[rejectsnewlines]').on('paste', function(e) {
     	var $self = $(this);
      setTimeout(function() {
       	$self.html($self.text());
       }, 0);
    }).on('keypress', function(e){
    	 return e.which != 13;
    });

$('[timeduration]').on('paste', function(e) {
     	var $self = $(this);
      setTimeout(function() {
       	$self.html($self.text());
       }, 0);
    }).on('keypress', function(e){
    	 return e.which >= '0'.charCodeAt(0) && e.which <= '9'.charCodeAt(0);
    });
