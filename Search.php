<?php
   $CN=mysqli_connect("localhost","root","");

   $DB=mysqli_select_db($CN, "products");

   $FindProduct=$_POST["FindProduct"];

   $SQ="select * from product where barcode=$FindProduct";

   $Table=mysqli_query($CN, $SQ);

   if(mysqli_num_rows($Table)>0)
   {
       $Row=mysqli_fetch_assoc($Table);
       $prodname=$Row["prodname"];
       $qty=$Row["qty"];
       $category=$Row["category"];
       $price=$Row["price"];
       $barcode=$Row["barcode"];    
       $pic=$Row["pic"];
   }
   else 
   {
       $prodname="";
       $qty="";
       $category="";
       $price="";
       $barcode="";    
       $pic="";
   }
   $Response[]=array("prodname"=>$prodname,"qty"=>$qty,"category"=>$category,"price"=>$price,"barcode"=>$barcode,"pic"=>$pic);
   echo json_encode($Response);






?>
