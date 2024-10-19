function isBST(node) {
  return helper(node, null, null);
}

function helper(node, min, max) {
  if (node === null) {
    return true;
  }
  if (
    (min !== null && node.data <= min) ||
    (max !== null && node.data >= max)
  ) {
    return false;
  } else {
    return (
      helper(node.left, min, node.data) &&
      helper(node.right, node.data, max)
    );
  }
}
