---
layout: default
title: Places
---

<html>
<head>
<link href="{{ "/" | relative_url }}public/css/lightbox.css" rel="stylesheet" />
<style>
* {
  box-sizing: border-box;
}

.img-container {
  float: left;
  width: 50%;
  padding: 20px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}


</style>
</head>
<body>

<div class="clearfix">
  <div class="img-container">
    <a href="../images/places/wuppertal.jpg" data-lightbox="wuppertal" data-title="Wuppertal">
    <img src="../images/places/wuppertal.jpg" alt="photo_wuppertal" width="800" height=auto class="image square"></a>
  </div>
  <div class="img-container">
    <a href="../images/places/margate.jpg" data-lightbox="margate" data-title="Margate">
    <img src="../images/places/margate.jpg" alt="photo_wuppertal" width="800" height=auto class="image square"></a>
  </div>
</div>

<div class="clearfix">
  <div class="img-container">
    <a href="../images/places/avignon.jpg" data-lightbox="Avignon" data-title="Avignon">
    <img src="../images/places/avignon.jpg" alt="photo_wuppertal" width="400" height=auto class="image square"></a>
  </div>
  <div class="img-container">
    <a href="../images/places/countryside.jpg" data-lightbox="Countryside" data-title="Countryside">
    <img src="../images/places/countryside.jpg" alt="photo_wuppertal" width="400" height=auto class="image square"></a>
  </div>
</div>

<div class="clearfix">
  <div class="img-container">
    <a href="../images/places/berlin.jpg" data-lightbox="Berlin" data-title="Berlin">
    <img src="../images/places/berlin.jpg" alt="photo_wuppertal" width="400" height=auto class="image square"></a>
  </div>
  <div class="img-container">
    <a href="../images/places/london.jpg" data-lightbox="London" data-title="London">
    <img src="../images/places/london.jpg" alt="photo_wuppertal" width="400" height=auto class="image square"></a>
  </div>
</div>

</body>
<script src="{{ "/" | relative_url }}public/js/lightbox-plus-jquery.js"></script>
</html>
