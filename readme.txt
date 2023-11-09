SAMPLE REQUEST
--------------

1.ROUTE : [POST] /addproduct
{
"productname" : "apple",
"quantity" : 10
}

2.ROUTE : [GET] /getallproduct

3.ROUTE : [DELETE] /deleteproduct
{
  "productname" : "apple"
}

4.ROUTE : [PUT] /editproduct
{
  "productname" : "apple",
"quantity" : 20
}

5.ROUTE : [POSST] /order/placeorder
{
  "productname" : "apple",
"quantity" : 1
}

6.ROUTE : [DELETE] /order/deleteorder
{
  "productname" : "apple"
}
