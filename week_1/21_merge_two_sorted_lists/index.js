/* 
    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists in a one sorted list. The list should be made by 
    splicing together the nodes of the first two lists.

    Return the head of the merged linked list.

    Time complexity: O(m+n)
*/

import ListNode from "./utils/ListNode.js";
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2
    if (!list2) return list1

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};

const list1Node1 = new ListNode(4, null)
const list1Node2 = new ListNode(2, list1Node1)
const list1Node3 = new ListNode(1, list1Node2)

const list2Node1 = new ListNode(4, null)
const list2Node2 = new ListNode(3, list2Node1)
const list2Node3 = new ListNode(1, list2Node2)

const list = mergeTwoLists(list1Node3, list2Node3)
let current_node = list
while(current_node) {
    console.log(current_node.val)
    current_node = current_node.next
}