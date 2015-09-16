$(document).ready(function() {

  // $(".clickable_c").click(function() {
  //   $("#cat").fadeIn();
  //     });
  //
  // $(".clickable_d").click(function() {
  //     $("#dog").show();
  //     });
  //
  // $(".clickable_w").click(function() {
  //   $("img").toggle();
  //   $("#walrus").toggle();
  //   });
   $(".clickable_w").click(function(){
     $("#picShow").toggle();
     $("#picNoShow").toggle();
   });
   $(".clickable_c").click(function(){
     $("#picShow_c").toggle();
     $("#picNoShow_c").toggle();
   });
   $(".clickable_d").click(function(){
     $("#picShow_d").toggle();
     $("#picNoShow_d").toggle();
   });
   $("button#choose").click(function(){
     $("ul#user").prepend("<li class='first_line'>Hi Cat</li>");
     $("ul#cat_convo").prepend("<li class='first_line'>Hi human</li>");
     $("h2#animal").append("Cat!");
     $("h2#cat_resp").prepend("The Cat");
     $("ul#user").before("<h3>Your Conversation</h3>");
     $("ul#cat_convo").before("<h3>Cat's Conversation</h3>");
   });
   $("button#choose_1").click(function(){
     $("li.first_line").remove();
    //  $("ul#cat_convo").children("li").remove();
     $("ul#user").prepend("<li>How are you today, Charlie?</li>");
     $("ul#cat_convo").prepend("<li>Leave me alone, human. I'm tired.</li>");
     $("ul#user").prepend("<li>What is your name, Cat?</li>");
     $("ul#cat_convo").prepend("<li>Charlie.</li>");
   });
   $("button#choose_2").click(function(){
     $("ul#cat_convo").children("li").remove();
     $("ul#user").children("li").remove();
     $("ul#user").prepend("<li>Fine, cat. You're mean. Bye.</li>");
     $("ul#cat_convo").prepend("<li>Bye annoyance. Purrrr.</li>");
     $("div.row").after("<h1 id='end_convo'>Click to End Convo</h1>");
     $("h1#end_convo").click(function(){
      $(this).remove();
      $("h2#animal").remove();
      $("h3").remove();
      $("h2#cat_resp").remove();
      $("li").remove();
     });
   });
   $("#blanks form").submit (function(event){

     var person1Input = $("input#person1").val();
     var person2Input = $("input#person2").val();
     var animalInput = $("input#animal").val();
     var exclamationInput = $("input#exclamation").val();
     var verbInput = $("input#verb").val();
     var nounInput = $("input#noun").val();

     $(".person1").text(person1Input);
     $(".person2").text(person2Input);
     $(".animal").text(animalInput);
     $(".exclamation").text(exclamationInput);
     $(".verb").text(verbInput);
     $(".noun").text(nounInput);

     $("#story").show();

     event.preventDefault();
   });
 });
