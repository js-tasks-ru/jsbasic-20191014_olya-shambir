/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  document.body.insertAdjacentHTML('afterbegin', '<ul id="friends_list"></ul>');
  const list = document.getElementById('friends_list');
  for (friend of friends) {
    itemList = `<li>${friend.firstName} ${friend.lastName}</li>`;
    list.insertAdjacentHTML('beforeend', itemList);
  }
  return list;
}
