<?php
// Creamos un array con 4 sentencias
$vector = array(
1 => "La experiencia es esa cosa maravillosa que te permite reconocer u
n error cuando lo cometes de nuevo",
2 => "Toda la vida pensando que el aire es gratis, hasta que te compras
una bolsa de doritos.",
3 => "Tanto los optimistas como los pesimistas contribuyen a la socieda
d. El optimista inventa el avión, el pesimista el paracaídas.",
4 => "No seas tan humilde, no eres tan importante"
);
// Obtenemos un número aleatorio
$numero = rand(1,4);
// Devolvemos la frase elegida
echo "$vector[$numero]";