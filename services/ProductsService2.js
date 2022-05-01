export function getTheProducts() {
  var myHeaders = new Headers();
  myHeaders.append("X-Dw-Client-Id", "5422b913-b068-433c-983b-711e16c7b62d");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://development-shop-lolaliza.demandware.net/s/lolaliza/dw/shop/v19_10/product_search?currency=EUR&count=20&refine_1=cgid%3D1117&refine_2=htype%3Dslicing_group%7Cproduct%7Cvariation_group%7Cmaster&refine_3=c_showInHsApp%3Dtrue&refine_4=orderable_only%3Dfalse&select=%28count%2Chits.%28%2A%2A%29%2Crefinements.%28attribute_id%2Clabel%2Cvalues%5B0%3A1000%5D%29%2Csorting_options%2Ctotal%29&select=(**)&locale=fr-BE",
    requestOptions
  ).then((response) => response.json);
}
