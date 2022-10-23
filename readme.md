## This repository has the didactic purpose of studying the binary search algorithm.

We have a list with the values ​​sorted numerically or alphabetically, where you can do a much faster search. Instead of searching the list in sequence, a binary search will start by examining the middle item. If that item is the one we're looking for, the search ends. If it is not the correct item, we can use the ordered nature of the list to eliminate half of the remaining items. If the item we are looking for is larger than the middle item, we know that the entire bottom half of the list, as well as the middle item, can be eliminated from further consideration. The item, if in the list, should be in the top half.

We can then repeat the process with the upper half. Start at the middle item and compare it against what we're looking for. Again, we find or split the list in half, thus eliminating a large part of our possible search space.

<div align="center">
  <img src="https://www.mundojs.com.br/wp-content/uploads/2018/02/buscabinaria.png">
</div>
