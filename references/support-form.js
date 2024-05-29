$(document).ready(function () {
  var e,
    ccode = "",
    timeZoneVal = "",
    checkInVal = "";
  jQuery.ajax({
    url: "https://edns.ip-api.com/json",
    type: "POST",
    dataType: "jsonp",
    success: function (o) {
      e = o.dns.geo;
    },
  }),
    $(".support-form,.request_demo_form,#mo_external_contact_form").submit(
      function (o) {
        o.preventDefault();
        var t = jQuery(this).attr("id"),
          n = new Date(),
          a = n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds(),
          r = n.getDate() + "/" + (n.getMonth() + 1) + "/" + n.getFullYear(),
          c = "",
          parts = "",
          s = "",
          i = "",
          timeZoneVal = $("#dropdownTimeZone").val(),
          checkInVal = $("#checkin").val();
        "request_demo_form" == $(this).attr("id")
          ? ((ccode = $(".country-codes-format").val()),
            (timeZoneVal = $("#dropdownTimeZone").val()),
            (parts = ccode),
            (email = $("#request_demo_email").val()),
            isValidEmail(email)
              ? "Demo Timeframe Zone :  " + checkInVal + " " + timeZoneVal
              : "",
            (c = $("#request_demo_phone").val()),
            (look = "Schedule A Demo[Form]"))
          : "mo_external_contact_form" !== $(this).attr("id") &&
            ((email = $("#person_email").val()),
            (ccode = $("#countryCodes").val()),
            (parts = ccode),
            parts.length > 1 ? (ccode = parts) : "",
            (c = $("#person_phone").val()),
            (query = $("#person_query").val()),
            (look =
              $(".what_you_looking_for").val() +
              (desc_type ? "(" + desc_type + ")" : ""))),
          "mo_external_contact_form" == t &&
            (jQuery("#mo_external_contact_form_email").length > 0 &&
              (email = jQuery("#mo_external_contact_form_email")
                .val()
                .replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "")),
            jQuery("#mo_external_contact_form_name").length > 0 &&
              (i = jQuery("#mo_external_contact_form_name").val()),
            jQuery("#mo_external_contact_form_fname").length > 0 &&
              (i = jQuery("#mo_external_contact_form_fname").val()),
            jQuery("#mo_external_contact_form_lname").length > 0 &&
              (s = jQuery("#mo_external_contact_form_lname").val()),
            jQuery("#mo_external_contact_form_query").length > 0 &&
              (query = jQuery("#mo_external_contact_form_query")
                .val()
                .replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "")),
            jQuery("#mo_external_contact_form_look").length > 0 &&
              (look = jQuery("#mo_external_contact_form_look").val()),
            jQuery(".country-code-format").length > 0 &&
              ((ccode = $(".country-code-format").val()), (parts = ccode)),
            jQuery("#mo_external_contact_form_phone").length > 0 &&
              (c = jQuery("#mo_external_contact_form_phone")
                .val()
                .replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "")),
            jQuery("#mo_external_contact_form_company").length > 0 &&
              (company = jQuery("#mo_external_contact_form_company")
                .val()
                .replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "")),
            jQuery(".mo_external_contact_form_extra_info").each(function () {
              if (
                "checkbox" !== jQuery(this).attr("type") &&
                "radio" !== jQuery(this).attr("type")
              )
                query +=
                  `<br><br><b>${jQuery(this).data("mailkey")}</b>:` +
                  jQuery(this).val();
              else if (
                "radio" == jQuery(this).attr("type") &&
                jQuery(this).is(":checked")
              ) {
                let e = jQuery(this).attr("name"),
                  o = jQuery(
                    `input[type="radio"][name="${e}"][data-mailkey].mo_external_contact_form_extra_info`
                  ).data("mailkey");
                query += `<br><br><b>${o}</b>:` + jQuery(this).val();
              }
            }));
        var l = $(location).attr("href"),
          ec = $(this).attr("id"),
          rd = $(this).attr("class"),
          m =
            "<b>[" +
            look.replace("[Form]", "") +
            "]</b><br><br> Issue URL: " +
            l +
            " <br><p>" +
            query;
        if ("" == email || "" == query || "" == look || "" == m)
          $("#login-error").show(), $("#errorAlert").show();
        else {
          $('input[type="text"], textarea').val(""),
            $("select").val("Select Category"),
            $(".support-form").css("display", "none"),
            $(".loading-inner").css("display", "block"),
            ((json = new Object()).email = email),
            (json.query = m),
            (json.phone = ccode + c),
            (json.ccEmail = "pranit.bagmar@xecurify.com"),
            i.length > 0 && (json.firstName = i),
            s.length > 0 && (json.lastName = s);
          if (jQuery("#mo_external_contact_form_support").length > 0)
            json.support = jQuery("#mo_external_contact_form_support")
              .val()
              .replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");
          var u = JSON.stringify(json);
          $.ajax({
            url: "https://test.miniorange.in/moas/rest/customer/contact-us",
            type: "POST",
            data: u,
            crossDomain:!0,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (e) {},
            error: function (e, o, t) {
              "mo_external_contact_form" == ec &&
                ("Invalid email." == e.responseText
                  ? moExternalContactFormErrorMsg()
                  : "Query submitted." == e.responseText &&
                    moExternalContactFormSuccessMsg()),
                "request_demo_form" == rd &&
                  ("Invalid email." == e.responseText
                    ? fail()
                    : "Query submitted." == e.responseText && success());
            },
          }),
            jQuery.ajax({
              url: "https://plugins.miniorange.com/wp-content/plugins/miniorange-contact-us-shortcode/updateSheet/updateSheet.php",
              type: "post",
              dataType: "json",
              data: {
                link: l,
                email: email,
                phone: c,
                query: query,
                checkin: "",
                droptime: "",
                appt: "",
                category: look,
                date: r,
                time: a,
                location: e,
              },
              success: function (e) {},
              error: function (e, t, o) {},
            });
        }
      }
    );
}),
  $(document).ready(function () {
    var e = window.location.href;
    "https://www.miniorange.com/" !== e &&
      ("contact" === e || "https://www.miniorange.com/thanks" === e
        ? $(".support-icon").css("display", "none")
        : $(".support-icon").css("display", "block")),
      $(window).scroll(function () {
        $(this).scrollTop() >= 200 &&
          ("contact" === e || "https://www.miniorange.com/thanks" === e
            ? $(".support-icon").css("display", "none")
            : $(".support-icon").css("display", "block"));
      }),
      $(".service-img").click(function () {
        $(".support-form-container").css("display", "block"),
          $(".help-container").css("display", "none");
      }),
      $(".help-container").click(function () {
        $(".support-form-container").css("display", "block"),
          $(".help-container").css("display", "none");
      }),
      $(".exit3").click(function () {
        $(".support-form-container").css("display", "none");
      }),
      $(".service-img").click(function () {
        $('input[type="text"], textarea').val(""),
          $("select").val(""),
          $(".support-form-container").css("display", "block"),
          $(".support-form").css("display", "block"),
          $(".loading-inner").css("display", "none"),
          $(".help-container").css("display", "none");
      });
  });
var submitted = !1,
  invalid = !1;

$(document).ready(function () {
  $("#mo_external_contact_form_email").on("keyup", function () {
    var e = $(this).val().toLowerCase();
    (e.endsWith("@gmail.com") ||
      e.endsWith("@yahoo.com") ||
      e.endsWith("@hotmail.com") ||
      e.endsWith("@protonmail.com") ||
      e.endsWith("@yahoo.co.in") ||
      e.endsWith("@outlook.com")) &&
      (moExternalContactFormErrorMsg(), (invalid = !0));
  });
}),
  $(document).ready(function () {
    $(".list_one li").click(function () {
      var e = $(this).attr("id");
      document.getElementById("entry_726395439").value = e;
    });
  });

$(document).ready(function () {
  var countryListVisible = !1;
  $(".country-code-container").click(function () {
    countryListVisible
      ? $("ul.country-list").removeClass("country-list-container")
      : $("ul.country-list").addClass("country-list-container"),
      (countryListVisible = !countryListVisible);
  }),
    $("li.country").click(function () {
      $("ul.country-list").addClass("country-list-detail");
    });
});

function moExternalContactFormSuccessMsg() {
  $("#moExternalContactFormSuccessMsg").show();
  setTimeout(function () {
    $("#moExternalContactFormSuccessMsg").hide();
  }, 8000);
  $("#moExternalContactFormErrorMsg").hide();
}
function moExternalContactFormErrorMsg() {
  $("#moExternalContactFormErrorMsg").show();
  setTimeout(function () {
    $("#moExternalContactFormErrorMsg").hide();
  }, 8000);
  $("#moExternalContactFormSuccessMsg").hide();
}
