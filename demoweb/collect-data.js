var postdata = {};
$(".input").each(function () {
  postdata[$(this).attr("name")] = $(this).val();
});