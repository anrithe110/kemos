function changeLanguage(lang) {
    let element = $(".lang");
    if (lang == "en") {
       $(".cta1").text("Advantages ?");
       $(".prodw").text("wallets");
       $(".con").text("Our social networks");
       $(".kon").text("contact");
       $(".titletext").text("Handmade natural leather accessories,");
       $(".titletext2").text("Wallets, belts and bags.");
       $(".titletext3").text("Ecologically clean product");
       $(".titletext4").text("durability, quality.");
       $(".titletext5").text("Unique design.");
       $(".titletext6").text("Wallets");
       $(".titletext7").text("belts");
       $(".titletext8").text("bags");
       $(".prod").text("products");
       // $("a,h1,h2,h3,h4,h5,h6").addClass("font")$(".").text("");
       //$(".").text("");
       //   $("a,h1,h2,h3,h4,h5,h6").removeClass("font")$(".").text("");
    } else if (lang == "ge") {
      $(".cta1").text("უპირატესობები ?");
      $(".prodw").text("საფულეები");
      $(".con").text("ჩვენი სოციალური ქსელები");
      $(".kon").text("კონტაქტი");
      $(".titletext").text("ხელნაკეთი ნატურალური ტყავის აქსესუარები,");
      $(".titletext2").text("საფულეები, ქამრები და ჩანთები.");
      $(".titletext3").text("ეკოლიგიურად სუფთა პროდუქტი.");
      $(".titletext4").text("სიმტკიცე, მდგრადობა, ხარისხი.");
      $(".titletext5").text("უნიკალური დიზაინი.");
      $(".titletext6").text("საფულეები");
      $(".titletext7").text("ქამრები");
      $(".titletext8").text("ჩანთები");
      $(".prod").text("პროდუქცია");
      //$(".").text("");
      //$(".").text("");
      //$(".").text("");
      //$(".").text("");
    } 
 }
 //https://www.tutorialspoint.com/how-to-switch-the-language-of-the-page-using-javascript//