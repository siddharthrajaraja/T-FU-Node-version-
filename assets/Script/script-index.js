$(document).ready(function() {
  // black radio button clicked by default
  $tshirtColorId = "black";
  $("input:radio[name=color][value=black]").click();
  $(".design-container").addClass("hidden");
  //the labels animation
  $("label").click(function() {
    $("label").removeClass("clicked");
    $(this).addClass("clicked");
  });

  //dynamic t-shirt color changer
  $('input:radio[name="color"]').click(function() {
    $tshirtColorId = $(this).attr("id");
    $tshirtColor = "#" + $(this).attr("id") + "-img";
    $(".img-color").addClass("hidden");
    $($tshirtColor).removeClass("hidden");
  });

  //dynamic t-shirt design changer
  $('input:radio[name="design"]').click(function() {
    $designImgUrl = "assets/img/design/" + $(this).attr("value") + ".png";
    console.log($designImgUrl);
    $(".design-container").css({
      background: "url(" + $designImgUrl + ")",
      "background-size": "contain"
    });
  });

  //after color i.e. design animation :)

  /*
  $(".next-btn1 .btn").click(function() {
    $(".color-menu").animate({ top: "0vh" }, 1000);
    $(".color-menu").animate(
      {
        top: "-50vh",
        opacity: 0
      },
      1000
    );
    //$(".design-menu").removeClass("hidden");
    //$(".design-menu").animate(1000);
    //$(".design-menu").removeClass("hidden");
    $(".design-menu").animate(
      {
        display: "block",
        top: "-10vh",
        opacity: 1
      },
      1000
    );
    $(".design-menu").removeClass("hidden");
  });
  */
});
